import axios from "axios";

const URL='http://localhost:5167/api/Payment'

const addPayment = async (payment) => {
    try {
        const response = await axios.post(URL, payment);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
}

const deletePayment = async (paymentId) => {
    try {
        const response = await axios.delete(`${URL}/${paymentId}`);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
};

const GetPaymentdetails=async ()=>{
    try {
        const response = await axios.get(URL);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
}

const GetSponsorSum=async ()=>{
  let url=`${URL}/sponsor-sum`
  try {
      const response = await axios.get(url);
      return { data: response.data, loading: false, error: null };
  } catch (error) {
      return { data: null, loading: false, error: error };
  }
}

const GetMatchDetails=async ()=>{
    let url=`${URL}/Match-Details`
    try {
        const response = await axios.get(url);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
  }

  const updatePayment = async (paymentId, newPrice) => {
    try {
        // Construct the URL with query parameters if needed
        const response = await axios.put(`${URL}/${paymentId}?newprice=${newPrice}`);
        
        // Return the data and error handling
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        // Return the error details
        return { data: null, loading: false, error: error };
    }
};
export {GetPaymentdetails,GetSponsorSum,GetMatchDetails,addPayment,deletePayment,updatePayment}