import React from 'react'

function RightSideBar() {

    return (
        <>
            <div className="relative  my-6 custom:my-0 w-full custom:w-[20%]">
                <div className="pr-4 pb-4 flex custom:min-h-screen items-end flex-col justify-end custom:fixed custom:right-0 custom:bottom-0">
                    <h6
                        className={`text-3xl font-primary text-right ${
                            location === "/" ? "sm:block hidden" : ""
                        }`}
                    >
                        ARC1
                    </h6>
                    <p className="text-[1.2rem] font-text uppercase text-right">
                        "from the ground up"
                    </p>
                </div>
            </div>          
        </>
    )
}
export default RightSideBar