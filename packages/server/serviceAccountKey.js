require('dotenv').config();
//console.log(process.env.private_key.replace(/\\n/g, '\n'));
//TODO this is stop gap solution need to reolve private key and email parsing issue
const firebaseConfig = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDghHQccotmE6En\ngDSYE6zvH67cZlle9XXCmtdQKq+qdBulaeMbG3rRQZSqYYdY5cIm4q8n+AXhsgQa\nmD+OU3dTpNPYIiucZv7P3s0tr+muZkfTqgnjFHjn2FFCZZutQ9zLwRGoh/aJb+K8\nlbesIhnQwdadfAJyiEZNcvZ89PLHiFvswFntMXmffLTGqfwq8iek+zMSZjdhi1xt\ndvGg7Mbv2RbHf/CbDEieG1dC32WJIP8y6qz+ebZBHp0j3s8MAoi/Jb8drKzEBSQx\nEntiT/yzhSuiQ/woEeeQvpEYKIUv5uROvhpWHuahByMB0+/VROtdQznOnCE3lsn2\nnhUGa9/lAgMBAAECggEAWXhfHwEEjRqQc4HTM7FPjoFFOR5uSfmuQm1bFV7VXyti\n4wG115UVVfN474brHWF+A+n83AQqL901ZnW6ihi36jS6mRxQ3cRrkeHbSPQbvvyS\nbgaKZxw+7EFXbIq6RYtQH0BirZL1C6LzK6zMI4P5XqgIQvzqqsKkpXOFR5mDcECn\nGzqaJtrnX0CPY49BjX5R1o5Un9IPCtiNRSfYJ0yux4tv/ctl0qZjm8MbYa4sj4fS\nF8oZ8X5GrT7GG0f9QIu2+fplu5GGWkY+B0aBjgWHKJ2KyR0+6muo6HKkFYA0Ey5G\nfcKsS7Jy2C/B2koRfSM0SQsFzb3NTyWhKyWAGiZzBwKBgQD3EfzvSzm6cKlyIhX5\n1CmxgtlcbFzuRxKhoDbPoAV+lOL5j/GMX6hiccSL9lkGGMN+9kRsf2ZzxjV+TvDx\n22Qo+ZKQrBghoEnzASi1H0Yb0cu81rVFNnTwGgw8OYn4kMhZii97zrFMQ6jX1pbB\nZYPNm+CL8rQC8Lq+VtVXEdkQEwKBgQDoocuuVQyRxcU94zuMO/6rYVmbQ+J9Wupb\nJQdEXSThDB/zH7ukc2rvQORn0/T20VSAUvUYCqlp3EHP/yvCiEuHw1OY4Gves19I\nj3cKfrQ3CDr+qTXMXCwniaORrSZI8/bIU1HyoilM9ccALSz7AJDUyQDxTPlz+Srr\nvp2LyTt/JwKBgCvMkoxRR6CXjFJhXIf3ZpTDX4kU5LyQ+OqSHmVcNt0jw8D+FZIO\n+yjIhlFRkKKWDUIaojKhuyXXA3Cqyef2PqFM7QCcoYKEidd8Yx0IuEMCRB3r6iKk\n7sIJvBWJFb5s3DeTWauXDrM4Y1wv/HW4a08tzPbCRcsnpdNMTXGsBlDlAoGBAN92\nnFtoY1ycJ+5dG1SIRQiHyTW2rhhQfxLyrNpkxwpPRVmcP/mmzS/qm/2Iw6VcS9nA\n1qMziq2f4LBWo8iIeFV/sgwGeFhC4eKnvWgdcivzAgiiroUSfW+1baSAOWiWwZaJ\nQwzZ7OZ6qaBnxO+QCY/9TaR9lppq3Wn7fwdKVJa9AoGBAKuyb646AXUs0id5MW40\nTb1hEu2pz+93hgB0w2qE2+IVtYu466L64fmneos0rdM0DqhpwX8dThpgCSCgPtND\n03fVAPbg2D6LtCtPZUcaOk7GscAB2bTpyAz7qRtOPtxnRyPbR8IJ8Zm0+bwr+XWx\nD4rCAeEdl9FSqv1OX6H8UNWk\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-56g32@construyo-coding-challenge.iam.gserviceaccount.com",
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
}

module.exports = firebaseConfig;