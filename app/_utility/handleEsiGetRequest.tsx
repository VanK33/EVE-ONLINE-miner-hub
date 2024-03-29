import axios from "axios";

interface Response {
  data: any;
}

// responsible for extracting the callback code from the URL and send to the server
const handleEsiGetRequest = async (
  url: string,
  code: string,
  state: string
): Promise<Response | null> => {
  try {
    const response = axios.post(
      url,
      {
        code: code,
        state: state,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return (await response).data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default handleEsiGetRequest;
