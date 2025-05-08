export async function getConfig() {
  const response = await fetch('/api/config');
  return response.json();
} 