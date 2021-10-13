const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'some-token-secret';
class Session {
  constructor(ctx) {
    this.ctx = ctx;
    this.userId = null;
    const sessionToken = ctx.cookies.get('sessionToken');
    this.initFromToken(sessionToken);
  }
  initFromToken(sessionToken) {
    if (!sessionToken) {
      return;
    }
    try {
      const { userId } = jwt.verify(sessionToken, TOKEN_SECRET);
      this.userId = userId;
    } catch (error) {
      console.error('Error decoding session token', error);
    }
  }
  update(user) {
    if (!user) {
      return;
    }
    this.userId = user.id;
    const sessionToken = jwt.sign(
      { userId: user.id },
      TOKEN_SECRET,
      // A session should not last for 1 day in production environments
      { expiresIn: '1d' },
    );
    const cookieOptions = {
      httpOnly: true,
      // use secure flag in production to send only via encrypted connections
      // secure: true,
    };
    this.ctx.cookies.set('sessionToken', sessionToken, cookieOptions);
  }
    delete() {
        this.userId = null;
        this.ctx.cookies.set('sessionToken', null);
    }
}
const sessionMiddleware = async (ctx, next) => {
    ctx.session = new Session(ctx);
    await next();
};

module.exports = sessionMiddleware