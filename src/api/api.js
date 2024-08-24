

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
}

export const fetchQuizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  try {
    const response = await fetch(url);
    if (response.status === 429) {
      // Rate limit hatası durumunda bekle ve tekrar dene
      console.log("Rate limit'e ulaşıldı. 60 saniye bekleniyor...");
      await new Promise(resolve => setTimeout(resolve, 60000)); // 60 saniye bekle
      return fetchQuizData(difficulty, amount); // Tekrar dene
    }

    const data = await response.json();
    console.log("API'den Gelen Veri:", data);
    
    if (data.results) {
      return data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
      }));
    } else {
      console.error("Sonuçlar bulunamadı.");
      return [];
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
}


