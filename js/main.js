document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea")
  const count_button = document.querySelector("#count-btn")
  const clear_button = document.querySelector("#clear-btn")

  const char_count = document.querySelector("#char-count")
  const char_without_space_count = document.querySelector(
    "#char-without-space-count"
  )
  const line_count = document.querySelector("#line-count")

  count_button.addEventListener("click", () => {
    const text = textarea.value

    char_count.textContent = text.replace("\n", "").length

    const char_without_space_count_value = text
      .replace(" ", "")
      .replace("\n", "")
      .replace("　", "").length
    char_without_space_count.textContent = char_without_space_count_value

    const lines = text.split("\n").filter((line) => line.length > 0)
    line_count.textContent = lines.length
  })

  clear_button.addEventListener("click", () => {
    textarea.value = ""
    char_count.textContent = "0"
    char_without_space_count.textContent = "0"
    line_count.textContent = "0"
  })
})
