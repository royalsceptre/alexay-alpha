/* eslint-disable jsx-a11y/alt-text */
const ChatBox = () => {
  return (
    <>
      <div className="fixed z-[999999] 2xl:w-[686px] 2xl:top-[80px] 2xl:bottom-[40px] 2xl:right-[125px]">
        <div>
          <div className="shadow-md bg-[#f5f5f5] absolute top-0 bottom-0 left-0 overflow-hidden rounded-[10px]">
            <div className="overflow-hidden">
              <div className="ml-auto mr-auto text-left lg:max-w-[960px]">
                <div className="p-[16px] flex items-center h-[120px] realtive bg-[#52bad5]">
                  <img
                    className="absolute top-[12px] right-[16px] w-[22px] h-[16px] rounded-[2px]"
                    src="https://ww2-secure.justanswer.com/static/flags/DE.svg"
                  />
                  <div className="w-[96px] h-[96px] overflow-hidden flex-shrink relative">
                    <div className="w-full h-full">
                      <img
                        className="rounded-full border-[8px] border-solid border-[hsla(0,0%, 100%, 1)] block"
                        src="https://secure.justanswer.com/uploads/BA/barrenrock/2011-10-19_215925_JamesJAFinal.200x200.jpg"
                        alt="James"
                      />
                      <img
                        className="absolute b-[2px] right-[11px] w-[23px] block"
                        src="https://ww2-secure.justanswer.com/static/fe-gqa/th-gqa-search/verified-icon-2x.svg"
                      ></img>
                    </div>
                  </div>
                  <div className="pl-[24px] text-[12px] leading-[16px] text-[#fff] max-w-[calc(100%-100px)]">
                    <p className="text-[20px] leading-[20px] pb-[8px]">James</p>
                    <p className="text-[#fff]">consultant</p>
                    <p className="text-[#fff]">10 years of experience helping hundreds of people</p>
                    <div className="pt-[8px] flex items-end">
                    <svg
                        className="fill-[white]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                      </svg>
                      <svg
                        className="fill-[white]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                      </svg>
                      <svg
                        className="fill-[white]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                      </svg>
                      <svg
                        className="fill-[white]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                      </svg>
                      <svg
                        className="fill-[white]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
                      </svg>
                      <p className="pl-[8px] leading-[12px] text-[hsla(0,0%,100%,0.75)]">
                        <strong className="font-bold text-white"> 15,674</strong>
                        Satisfied&nbsp;customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatBox;
