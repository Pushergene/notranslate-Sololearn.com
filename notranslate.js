const observer = new MutationObserver(() => {
  const tags = document.querySelectorAll('.codeBlock, .placeholders, .placeholderQuiz, .placeholderDragAndDropQuiz')
  for (const tag of tags) {
    tag.classList.add('notranslate')
  }
})

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
})
