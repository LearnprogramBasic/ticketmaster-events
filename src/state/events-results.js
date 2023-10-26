// import { set } from 'date-fns'
import { create } from "zustand";

// store para guardar valores de manera global
const useEventResult = create((set) => ({
  data: [],
  error: null,
  isLoading: false,

  fetchEvents: async (params) => {
    try {
        await set(() => ({ isLoading: true }));
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
          import.meta.env.VITE_TICKETMASTER_API_KEY
        }&countryCode=MX${params?.length ? params : ""}`
      );
      const data = await response.json();

      set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error }));
    }
  },
}));
export default useEventResult;
