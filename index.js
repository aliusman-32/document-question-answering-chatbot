const chatContainer = document.getElementById("chat-container");
const questionInput = document.getElementById("question");
const sendBtn = document.getElementById("send-btn");
const fileInput = document.getElementById("pdf-upload"); 
function typeText(element, text, speed =30){
    let i = 0;
    function type(){
        if (i < text.length) {
            // Handle line breaks
            if (text.substr(i, 4) === "<br>") {
                element.innerHTML += "<br>";
                i += 4;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            chatContainer.scrollTop = chatContainer.scrollHeight;
            setTimeout(type, speed);
        }
    }
    type();
}

function addMessage(text, sender) {
    // Add items-start
    text = text.replace(/\*\*(.*?)\*\*/g, "<h3>$1</h3>");
    text = text.replace(/\n/g, "<br>");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(
        "p-3",
        "rounded-lg",
        "shadow",
        "max-w-md"
    );

    if (sender === "user") {
        msgDiv.classList.add("bg-blue-600", "text-white", "ml-auto");
        msgDiv.innerHTML = text;
    } else {
        msgDiv.classList.add("bg-gray-200", "text-gray-800", "mr-auto");
        msgDiv.innerHTML = "";
        typeText(msgDiv, text);
    }

    
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


questionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        sendBtn.click();
    }
});
questionInput.addEventListener("input", () => {
    questionInput.style.height = "auto";
    questionInput.style.height = questionInput.scrollHeight + "px";
});

sendBtn.addEventListener("click", async () => {
    const question = questionInput.value.trim();
    if (!question) return;
    addMessage(question, "user");
    questionInput.value = "";

    const formData = new FormData();
    formData.append("question", question);
    if (fileInput.files[0]){
        formData.append("file", fileInput.files[0]);
    }

    try{
        const response = await fetch("https://94467b8c5841.ngrok-free.app/answer",{
            method: "POST",
            body : formData
        });
        const data = await response.json();
        addMessage(data.answer || "Sorry no answer received.", "bot");
    } catch (error) {
        console.error("Error:", error);
        addMessage("Sorry, an error occurred while fetching the answer.", "bot");
    }

    
});




















