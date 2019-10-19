export default {
  STRIPE_KEY: "pk_test_AEuuTianjkUZUREGP4WNaprd00pEAFAU9f",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "teja-notes"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://3bdlxyw2h9.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_CTJ9YJDIU",
    APP_CLIENT_ID: "29v7ttg0kgmosr4an28plrl3bv",
    IDENTITY_POOL_ID: "us-east-2:77d80127-1c58-496f-b259-dbd3d4e12e69"
  }
};