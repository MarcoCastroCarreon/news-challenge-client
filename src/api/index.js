export const getLatestNews = async () => {
  const request = await fetch(`${process.env.REACT_APP_API_URL}/news`);
  const response = await request.json();
  return response;
};
