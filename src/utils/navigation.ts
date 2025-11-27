// Helper function to navigate without page reload
export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('navigateApp'));
};
