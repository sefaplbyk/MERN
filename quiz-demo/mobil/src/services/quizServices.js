export const fetchQuizzes = async () => {
  try {
    const response = await fetch("http://10.0.2.2:5000/api/quiz");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
