export default ({ config } = {}) => ({
  ...config,
  "extra": {
    "eas": {
      // TODO: read from env?
      // This is Jon's id
      // "projectId": "675cb1f0-fa3c-11e8-ac99-6374d9643cb2"
      // This is my own id
      // "projectId": "9b79fc2e-de92-46d6-8442-33b4eb72b8de"
    }
  }
});