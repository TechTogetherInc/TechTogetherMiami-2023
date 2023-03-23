export default function Challenges() {
    return (
        <section
            className="min-h-screen bg-gradient-to-b from-[#f22d89] to-[#4c0d4d] flex flex-col items-center \
                            text-white sm:px-40 px-10 gap-5">
            <h1 className="text-4xl font-semibold my-4">Challenges</h1>
            {challenges.map((c) => (
                <Challenge challenge={c.name}>{c.description}</Challenge>
            ))}
        </section>
    );
}

function Challenge(props: { challenge: string; children: React.ReactNode }) {
    return (
        <div className="bg-[rgba(0,0,0,0.2)] px-5 py-8 rounded-md">
            <h1 className="text-2xl mb-4">{props.challenge}</h1>
            {props.children}
        </div>
    );
}

function Link(props: { href: string; children: string }) {
    return (
        <a href={props.href} className="text-blue-400 font-semibold">
            {props.children}
        </a>
    );
}

function Highlight(props: { children: string }) {
    return <span className="text-yellow-500">{props.children}</span>;
}

const challenges = [
    {
        name: "☁️ Best Use of Microsoft Cloud for Your Community",
        description: (
            <>
                <Highlight>LinkedIn Premium 12-Month subscription</Highlight>{" "}
                and <Highlight>Xbox Ultimate 3-Month Game Pass</Highlight>.
                <br />
                Bring your idea to life using the Microsoft Cloud -
                automatically build and deploy a full stack web app from a code
                repository, create and train a Machine Learning model, develop
                business applications with little to no code using Power
                Platform, and more! View our recommended popular solutions in
                the Education Hub at{" "}
                <Link href="https://aka.ms/startedu">
                    https://aka.ms/startedu
                </Link>
                .
                <br />
                ⇩ ⇩ ⇩
                <br />
                Build your hackathon project with the Microsoft Cloud that
                tackles a social impact issue of your choice, and have a chance
                to win a{" "}
                <Link href="">LinkedIn Premium 12-Month subscription</Link> and
                an <Link href="">XBox Ultimate 3-Month Game Pass</Link>.
            </>
        ),
    },
    {
        name: "📖 Microsoft Passport Challenge",
        description: (
            <>
                Are you ready to travel around the{" "}
                <Highlight>Microsoft universe</Highlight>? Complete the
                following <Highlight>three (3) activities</Highlight> to receive
                a TechTogether sticker pack and digital certificate! Submit your
                entry here once you're done with all the activities:{" "}
                <Link href="https://hackp.ac/microsoft-challenge-submit">
                    https://hackp.ac/microsoft-challenge-submit
                </Link>
                <br />
                <br />
                Stop 1: Sign up for Azure for Students! Navigate to the link
                above and sign up for Azure for Students. Students, get Azure
                for free courtesy of Microsoft Azure. Full-time college students
                are eligible for a free Azure account with $100 in credits.
                How-To Tutorial:{" "}
                <Link href="">https://youtu.be/1blgs6KeA_A</Link> Sign Up Link:{" "}
                <Link href="">https://hackp.ac/MSFT-Stop1</Link> Take a photo of
                your dashboard once you've completed this step.
                <br />
                <br />
                Stop 2: Create a GitHub repository! Navigate to GitHub and
                create a GitHub Repository. How-To Tutorial:{" "}
                <Link href="">https://youtu.be/mK6Uo2qxUUM</Link> Navigate to
                GitHub
                <Link href="">https://hackp.ac/MSFT-Stop2</Link> Save the link
                to your repo once you've completed this step.
                <br />
                <br />
                Stop 3: Deploy a Service to Azure! Using your Azure for Students
                subscription, deploy any Azure service. It's incredibly easy to
                get started, with Quickstart Templates and user guides on
                Microsoft Docs. You can deploy any code you have from your
                Github repo directly into Azure as well. How-To Tutorial:{" "}
                <Link href="">https://youtu.be/BEYLnr5r1p4</Link> Microsoft
                Tutorial: <Link href="">https://hackp.ac/MSFT-AzureDocs</Link>{" "}
                Navigate to Azure:{" "}
                <Link href="">https://hackp.ac/MSFT-Stop3</Link> Take a photo of
                your deployment once you've completed this step.
            </>
        ),
    },
];
