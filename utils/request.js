const axios = require('axios')
const { logger } = require('../middlewares/log')

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_URL,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
    headers: {
      'Content-Type': 'application/json'
    },
    
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        logger.debug('[!------------------------api request success-----------------------]') 
        logger.debug(config.method, config.url, config.params, config.data);
        logger.debug('[------------------------api request success------------------------!]') 
        return config

    },
    error => {
        // do something with request error
        logger.error('[api request error] ' + error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

    response => {

        if (response.status !== 200) {
            logger.error(response.message)
            return Promise.reject(new Error(response.message || 'Error'))
        } else {
            const res = response.data
            if (+res.code === 200) {
                logger.debug('[!------------------------api response success---------------------]') 
                logger.debug(res.data);
                logger.debug('[------------------------api response success----------------------!]') 
                return res.data
            } else {
                logger.debug('!--------------api response error-----------------------') 
                logger.debug(res.data);
                logger.debug('!--------------api response error-----------------------') 
                return Promise.reject(res)
            }
        }
    },
    error => {
        logger.error('[http error] ' + error)
        return Promise.reject(error)
    }
)

module.exports = service