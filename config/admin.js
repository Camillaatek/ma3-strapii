module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '70195fe54bb60e8141df8f8085bf0b96'),
  },
});
