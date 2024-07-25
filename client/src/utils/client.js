import { API } from "../hooks/useBaseURL/useBaseURL";

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": data ? "application/json" : undefined,
      Accept: "application/json",
      ...customHeaders,
    },
    ...customConfig,
  };

  const response = await fetch(`${API}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json();
    return Promise.reject(errorData);
  }

  const responseData = await response.json();
  return responseData;
}

export { client };
