import { useEffect, useState } from "react";

export default function Itinerary() {
    const [day, setDay] = useState(window.location.hash);
    useEffect(() => {
        window.addEventListener("hashchange", () => {
            setDay(window.location.hash);
        });
    }, []);
    return (
        <section
            className="min-h-screen bg-gradient-to-b from-[#4c0d4d] to-[#f22d89] flex flex-col items-center \
                            text-white sm:px-20 lg:px-40 px-5 py-20 gap-5">
            <h1 className="text-4xl font-semibold mt-4">Itinerary</h1>
            <div className="flex gap-5 mb-4 sm:w-fit sm:self-start w-full text-center">
                <DayButton day={"Friday"} />
                <DayButton day={"Saturday"} />
            </div>
            {(day == null || day == "" || day?.toLowerCase() == "#friday") && (
                <Timeline events={fridayEvents} />
            )}
            {day?.toLowerCase() == "#saturday" && (
                <Timeline events={saturdayEvents} />
            )}
        </section>
    );
}

function DayButton(props: { day: string }) {
    return (
        <a
            href={`#${props.day.toLowerCase()}`}
            className="py-5 px-10 bg-[#f13c9a] rounded-xl text-lg text-white font-bold w-[50%]">
            {props.day}
        </a>
    );
}

type Event = {
    time: string;
    event: string;
    location: string;
};

const fridayEvents = [
    {
        time: "9:30am - 11:00am",
        event: "Checkin Starts",
        location: "",
    },
    {
        time: "11:30am - 12:05pm",
        event: "Opening Ceremony",
        location: "",
    },
    {
        time: "12:05pm",
        event: "Hacking Starts",
        location: "",
    },
    {
        time: "12:10pm - 12:55pm",
        event: "Team Building Event",
        location: "",
    },
    {
        time: "1:00pm - 2:00pm",
        event: "Lunch Served",
        location: "",
    },
    {
        time: "2:00pm - 3:00pm",
        event: "Sponsor: Microsoft Workshop",
        location: "",
    },
    {
        time: "3:30pm - 4:30pm",
        event: "Sponsor: CapitalOne Workshop",
        location: "",
    },
    {
        time: "7:30pm - 8:30pm",
        event: "Dinner Served",
        location: "",
    },
    {
        time: "8:30pm - 9:30pm",
        event: "MLH Mini-Event",
        location: "",
    },
];

const saturdayEvents = [
    {
        time: "12:00am - 12:30am",
        event: "Midnight Snack Served",
        location: "",
    },
    {
        time: "2:00am - 2:30am",
        event: "Mini-Event TBD",
        location: "",
    },
    {
        time: "9:00am - 10:00pm",
        event: "Breakfast Served",
        location: "",
    },
    {
        time: "10:30am",
        event: "Hacking Ends -> Submissions Start",
        location: "",
    },
    {
        time: "11:30am",
        event: "Submissions End",
        location: "",
    },
    {
        time: "12:00pm - 1:00pm",
        event: "Lunch Served",
        location: "",
    },
    {
        time: "1:00pm - 2:30pm",
        event: "Expo / Judging Starts",
        location: "",
    },
    {
        time: "3:00pm - 3:25pm",
        event: "Closing Ceremony",
        location: "",
    },
];

function Timeline(props: { events: Event[] }) {
    return (
        <div className="w-full h-full">
            <div className="relative wrap overflow-hidden h-full sm:w-[50%]">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[13px]"></div>
                {props.events.map((event, index) => {
                    if (index % 2 == 0) {
                        return (
                            <LeftTimeline key={index} num={index} {...event} />
                        );
                    }
                    return <RightTimeline key={index} num={index} {...event} />;
                })}
            </div>
        </div>
    );
}

function RightTimeline(props: { num: number } & Event) {
    return (
        <div className="mb-8 flex items-center w-full gap-5">
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                    {props.num + 1}
                </h1>
            </div>
            <div
                className={`order-1 ${
                    props.event.startsWith("Sponsor:")
                        ? "bg-[#e74034]"
                        : "bg-[#fb7160]"
                } rounded-lg shadow-xl w-full px-6 py-4`}>
                <h3 className="mb-3 font-bold text-white text-xl">
                    {props.event}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    {props.time}{" "}
                    {props.location != "" ? <>at {props.location}</> : <></>}
                </p>
            </div>
        </div>
    );
}

function LeftTimeline(props: { num: number } & Event) {
    return (
        <div className="mb-8 flex gap-5 items-center w-full">
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">
                    {props.num + 1}
                </h1>
            </div>
            <div
                className={`order-2 ${
                    props.event.startsWith("Sponsor:")
                        ? "bg-[#e74034]"
                        : "bg-[#808bfa]"
                } rounded-lg shadow-xl w-full px-6 py-4`}>
                <h3 className="mb-3 font-bold text-white text-xl">
                    {props.event}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    {props.time}{" "}
                    {props.location != "" ? <>at {props.location}</> : <></>}
                </p>
            </div>
        </div>
    );
}
