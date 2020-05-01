const jwt = require('jsonwebtoken');

const getIframeUrlFromKey = (questionId) => {
  const METABASE_SITE_URL = 'http://restaurant-dashboard-kel-6.herokuapp.com';
  const METABASE_SECRET_KEY = 'b8a62360e18b21f1a20f00b2d5b2cfb97098af2598b7851f460afeb9b1d8c7d0';

  const payload = {
    resource: { question: questionId },
    params: {},
    exp: Math.round(Date.now() / 1000) + (60 * 60), // 1 hour expiration
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  return `${METABASE_SITE_URL}/embed/question/${token}`;
};

export default getIframeUrlFromKey;
