exports.getDate = function (date) {
    if (date) {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}`
    } else {
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();
        return month + '/' + day
    }
}

exports.getTmrTimeDiff = function () {
    let tmr = new Date();
    tmr.setDate(new Date().getDate() + 1)
    tmr.setHours(0);
    tmr.setMinutes(0);
    tmr.setSeconds(0);
    tmr.setMilliseconds(0);
    const today = new Date().getTime();
    const tomorrow = tmr.getTime();
    return tomorrow - today;
}

exports.getStaticFileUrl = function (ctx, url) {
    return `${ctx.request.protocol}://${ctx.request.host}${url}`
}

exports.checkLogin = async function (ctx, next) {
    await next()
    if (ctx.session.session_id) {
        return true
    } else {
        ctx.fail("not logged in", 400)
    }
}
