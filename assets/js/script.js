const progressBar = document.querySelector(".progress-bar"), 
      progressText = document.querySelector(".progress-bar")

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};
