async function loadPage() {
  const pageId = document.getElementById('pageId').value;
  const response = await fetch(`/api/notion?pageId=${pageId}`);
  const data = await response.json();

  const container = document.getElementById('notionContent');
  container.innerHTML = data.results.map(block => {
    if (block.type === "paragraph") {
      return `<p class="mb-4">${block.paragraph.rich_text.map(rt => rt.plain_text).join("")}</p>`;
    }
    if (block.type === "heading_1") {
      return `<h1 class="text-xl font-bold mb-4">${block.heading_1.rich_text.map(rt => rt.plain_text).join("")}</h1>`;
    }
    return `<div class="mb-4 text-gray-500">[${block.type} 尚未支援]</div>`;
  }).join("");
}
