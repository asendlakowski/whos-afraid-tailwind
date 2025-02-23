interface PercentBarProps {
  percent: number;
}

const PercentBar = (props: PercentBarProps) => {
    return (
        <div>
            <div className="h-[30px] bg-primary-purple mx-10 w-[300px] rounded-lg">
                <div className="h-full bg-primary-blue rounded-l-lg text-white font-rb text-sm pr-2 flex items-center justify-end"
                    style={{ width: `${(300 * props.percent) / 100}px` }}>

                    {props.percent}%
                </div>


            </div>
            <div className="text-center w-full pt-1">
                <p className="text-primary-blue text-md font-blinker">
                    {props.percent < 20
                    ? "Great start, keep it up!"
                    : props.percent < 40
                    ? "Great job!! You are getting there!"
                    : props.percent < 60
                    ? "Killing it! (check out the hint if you're stuck)"
                    : props.percent < 80
                    ? "You're almost there! Terrific Tailwind!"
                    : "Congrats you're done!"}
                </p>
            </div>
        </div>
    );

}

export default PercentBar;
