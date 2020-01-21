export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-app-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yitce62o4f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_GMLxqJTBt",
    APP_CLIENT_ID: "50t5a5f00r2c9b0ceoa1bsi7r",
    IDENTITY_POOL_ID: "us-east-1:71031219-dfc1-4c50-a34d-22350900dfb7"
  }
};