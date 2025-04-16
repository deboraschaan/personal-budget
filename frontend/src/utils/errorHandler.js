export const handleApiError = (error) => {
    if (!error.response) return "Network error. Please try again.";
    if (error.response.status === 404) return "Resource not found.";
    if (error.response.status === 500) return "Internal server error.";
    return "Something went wrong!";
};