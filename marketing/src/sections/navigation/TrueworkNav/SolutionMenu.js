const SolutionMenuUpperText = [
    {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
        </svg>,

        subTitle: "Mortgage",
        description: "Close Loans Faster."
    }
    ,
    {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">

            <path d="M20 6 9 17l-5-5" />
        </svg>,
        subTitle: "Consumer Lending",
        description: "Approve More Borrowers."
    }
    , {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">

            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={8.5} cy={7} r={4} />
            <path d="m17 11 2 2 4-4" />
        </svg>,

        subTitle: "Pre-employment",
        description: "Verify Employment History."
    }
    , {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round" >

            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.35-4.35" />
        </svg>,

        subTitle: "Tenant Screening",
        description: "Mitigate Fraud Risk."
    }

]

const SolutionMenuLowerText = [
    {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">

            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>,

        subTitle: "Truework",
        description: "Overview of the Truework platform."
    }
    , {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx={12} cy={12} r={10} />
            <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
        </svg>,

        subTitle: "Truework & Encompass®",
        description: "Connect Truework to your loan origination system."
    }
    , {
        img: <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>,
        subTitle: "Pricing",
        description: "Enterprise plans and volume-based discounts available."
    }
]

export default { SolutionMenuUpperText, SolutionMenuLowerText };