import { defineStore } from "pinia";
import StoreName from "./storeName";

const useAppStore = defineStore(StoreName.APP, {
  state: () => ({
    isSidebarOpen: false,
  }),
  actions: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
});

export default useAppStore;
