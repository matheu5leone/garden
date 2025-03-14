"use client";

const BottomMenu = () => {


    return (
        <div className="flex items-center justify-center flex-col bg-emerald-950 fixed bottom-4 right-50% w-24 p-2 h-auto rounded-full gap-2">
            <button className="w-20 h-20 bg-emerald-700 rounded-full bg-[url('/gift.png')] bg-cover bg-center hover:cursor-pointer hover:bg-yellow-600"></button>
        </div>
    );
};

export default BottomMenu;
