import { ToastOptions, toast as hotToast } from "react-hot-toast";

const toast = {
  ...hotToast,
  success: (message: string, options?: ToastOptions) => {
    hotToast.success(message, {
      ...options,
      icon: <img src="/toast/success.svg" alt="Success" />,
    });
  },
  error: (message: string, options?: ToastOptions) => {
    hotToast.error(message, {
      ...options,
      icon: <img src="/toast/cross.svg" alt="cross" />,
    });
  },
  warn: (message: string, options?: ToastOptions) => {
    hotToast.success(message, {
      ...options,
      icon: <img src="/toast/warning.svg" alt="warning" />,
    });
  },
  info: (message: string, options?: ToastOptions) => {
    hotToast.success(message, {
      ...options,
      icon: <img src="/toast/info.svg" alt="info" />,
    });
  },
};

export default toast;
