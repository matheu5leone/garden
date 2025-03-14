"use client";

const SideMenu = () => {


    return (
        <div className="flex items-center justify-center flex-col bg-emerald-950 fixed top-50% right-4 w-24 p-2 h-auto rounded-3xl gap-2">
            <div className="w-20 h-20 bg-emerald-700 rounded-2xl bg-[url('/regador.png')] bg-cover bg-center hover:cursor-pointer hover:bg-yellow-600"></div>
            <div className="w-20 h-20 bg-emerald-700 rounded-2xl bg-[url('/regador.png')] bg-cover bg-center hover:cursor-pointer hover:bg-yellow-600"></div>
        </div>
    );
};

export default SideMenu;
