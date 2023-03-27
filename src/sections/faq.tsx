export default function FAQ() {
    return (

        <section className="faq">
            <div className="faq-title-row">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-questions-row">
                <div className="faq-left-col">
                    {qas.map((qaelement) => {
                        return <Qa question={qaelement.question}>{qaelement.answer}</Qa>
                    })}
                </div>
                <div className="faq-right-col">
                    {qas2.map((qa2element) => {
                        return <Qa question={qa2element.question}>{qa2element.answer}</Qa>
                    })}
                </div>
            </div>
        </section>
    );
}

const qas = [{
    question: "Where do I submit my solution/project?",
    answer: "You can submit your work in our devpost."
}, {
    question: "Where do I go to attend a session?",
    answer: "The hackathon will be held at the MDC BIT Center located in 300 NE Second Ave Business Innovation and Technology Center, Miami, FL 33132"
}, {
    question: "How do I find a mentor for help?",
    answer: "You will find us by our organizer shirts."
}, {
    question: "What is the project submission deadline?",
    answer: "The project submission deadline will be May 6 at {what our schedule says}"
}, {
    question: "How do I find a team to join?",
    answer: "We will host an event for you to socialize with others and find your team."
}, {
    question: "When and where will the hackathon be held?",
    answer: "The hackathon will be held May 5-6 at the MDC BIT Center located in 300 NE Second Ave Business Innovation and Technology Center, Miami, FL 33132"
}];

const qas2 = [{
    question: "What do I need to bring to the hackathon?",
    answer: "Your laptop, any charger you might need for your device and your fun spirit!"
}, {
    question: "Who can attend?",
    answer: "All marginalized genders "
}, {
    question: "What is a hackathon?",
    answer: "Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. -MLH "
}, {
    question: "How much does it cost to attend?",
    answer: "Nothing, it's a free event! "
}, {
    question: "Do I need experience to participate? Do I know how to code?",
    answer: "No you don't need experience or knowledge of coding to participate, this is an event to help you grow your skills!"
}, {
    question: "Do I have to submit a hackathon project?",
    answer: "No, it is not a requirement."
}];

function Qa(props: { question: string, children: string }) {
    return (
        <details>
            <summary className="question">{props.question}</summary>
            <div className="answer">
                {props.children}
            </div>
        </details>
    )
}
