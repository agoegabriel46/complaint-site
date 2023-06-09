module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2667a4cf15cc6eb930c699ac086919f'),
  },
});
