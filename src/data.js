export const data = async () => {
  const response = await fetch('https://api-dev.tap.tf/v1/widget/38/users');

  return response.json();
};