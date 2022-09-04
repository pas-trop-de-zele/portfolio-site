import { OfficeBuildingIcon } from "@heroicons/react/solid";
import React from "react";
import { jobs } from "../data";

export default function Jobs() {
    return (
        <section id="jobs" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <OfficeBuildingIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                        Where I've worked
                    </h1>
                </div>
                <div>
                    {jobs.map((job) => (
                        <div className="m-auto flex-auto sm:w-1/2 w-100 p-4">
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {job.title}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {job.name}
                                </h1>
                                <p className="leading-relaxed">
                                    {job.duration}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
