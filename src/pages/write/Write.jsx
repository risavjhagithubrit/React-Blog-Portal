import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://www.google.com/imgres?q=developer%20image%20src&imgurl=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F04%2F97%2F27%2F63%2F1000_F_497276312_KlXDlCU3sR8ExVoUG7oGssjLomeyFPHh.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fprogrammer-developer-typing-script-source-languages-coding-symbols-icon-development-project-data-programming-software-engineering-it-technologies-computer-3d-rendering%2F497276312&docid=S6OeBuqcR295VM&tbnid=G1uSpU5epRhjuM&vet=12ahUKEwjs97uCgq6GAxUWk68BHXfsANUQM3oECEUQAA..i&w=1000&h=563&hcb=2&ved=2ahUKEwjs97uCgq6GAxUWk68BHXfsANUQM3oECEUQAA" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>

                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
