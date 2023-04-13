module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('ACCESS_KEY_ID'),
        secretAccessKey: env('SECRET_ACCESS_KEY'),
        region: 'us-east-1',
        params: {
          Bucket: 'relojeria-ecommerce',
        },
      },
    },
  });