const PresalePrice = () => {
    return (
        <div className="container relative w-full md:w-[452px] h-[132px] rounded-[20px] border-[1px] border-[#F4F4F4]">
            <div className="absolute top-0 left-0 w-1/3 h-1/2 rounded-tl-[20px] mt-[15px] pl-[20px] border-r-2 border-[#F4F4F4]">
                <a className="text-[#ADADAD] text-[12px]">Pre-Sale Price</a>
                <p className="text-[16px]">$0.30</p>
            </div>
            <div className="absolute top-0 right-0 w-2/3 h-1/2 pl-[40px] pt-[15px]">
                <a className="text-[#ADADAD] text-[12px]">Initial Market Cap</a>
                <p className=" text-[16px]">$82,280,469.30</p>
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 pl-[20px] ">
                <div className="border-r-2 border-[#F4F4F4]">
                    <a className="text-[#ADADAD] text-[12px]">Launch Price</a>
                    <p className=" text-[16px]">$0.50</p>
                </div>
            </div>
            <div className="flex absolute bottom-0 right-0 w-2/3 h-1/2 pl-[40px] pt-[5px]">
                <div>
                <a className="text-[#ADADAD] text-[12px] mr-[15px]">Liquidity %</a>
                <p className=" text-[16px]">100%</p>
                </div>
                <div>
                <a className="text-[#ADADAD] text-[12px]">Lock Period</a>
                <p className=" text-[16px]">10 Year</p>                    
                </div>
            </div>
        </div>
    )
}
export default PresalePrice;