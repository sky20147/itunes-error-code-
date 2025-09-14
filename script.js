async function searchError() {
  const code = document.getElementById("errorInput").value.trim();
  const resultDiv = document.getElementById("result");

  try {
    // JSON 파일 불러오기
    const response = await fetch("errors.json");
    const data = await response.json();

    if (data[code]) {
      resultDiv.innerHTML = `
        <h2>에러 코드: ${code}</h2>
        <p>${data[code]}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>❗ 데이터에 없는 오류 코드입니다.</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>❗ 오류 정보를 불러오는 데 실패했습니다.</p>`;
    console.error(error);
  }
}

// DOM이 완전히 로드된 후 이벤트 등록
window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("errorInput");
  const btn = document.getElementById("searchBtn");

  if (input) {
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") searchError();
    });
  }

  if (btn) {
    btn.addEventListener("click", searchError);
  }
});
