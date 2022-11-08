import {ref} from "vue"

const useAlert = (initVisibility = false) => {
    const alertIsVisible = ref(initVisibility);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
    
    return [
      alertIsVisible,
      showAlert,
      hideAlert
    ];
}
export default useAlert