const jwt = require('jsonwebtoken');


const getIframeUrlFromKey = (questionId, parameter = {}, host = 'master') => {
  const METABASE_SITE_URL = host === 'master' ? 'https://restaurant-dashboard-kel-6.herokuapp.com' : 'http://metabase-cadangan.herokuapp.com';
  const METABASE_SECRET_KEY = host === 'master' ? 'b8a62360e18b21f1a20f00b2d5b2cfb97098af2598b7851f460afeb9b1d8c7d0' : '5051a02868e8f08ceac1ed4dc5b00bceaa698616d4dee8971ca9f14aabdc035f';

  const payload = {
    resource: { question: questionId },
    params: parameter,
    exp: Math.round(Date.now() / 1000) + (60 * 60), // 1 hour expiration
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  return `${METABASE_SITE_URL}/embed/question/${token}`;
};

export default getIframeUrlFromKey;
