import React, { useState } from 'react';
import { AlignJustify, House, Cpu, MemoryStick, HardDrive, Network, MonitorCog } from 'lucide-react';

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { Icon: <House />, href: '/', name: 'Home' },
        { Icon: <Cpu />, href: '/cpu', name: 'CPU' },
        { Icon: <MemoryStick />, href: '/memory', name: 'Memory' },
        { Icon: <HardDrive />, href: '/disk', name: 'Disk' },
        { Icon: <Network />, href: '/network', name: 'Network' },
        { Icon: <MonitorCog />, href: '/os', name: 'OS' },
    ];

    return (
        <div className="home-page text-left border py-2 px-2 rounded-md cursor-pointer" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <button
                type="button"
                className="inline-flex w-full justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <AlignJustify />
            </button>

            {isOpen && (
                <div
                    className="origin-top-right w-fit m-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div role="none">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block p-2 text-sm transition delay-100 duration-300 hover:scale-105 hover:border rounded-md"
                                role="menuitem"
                            >
                                <div className='flex items-center gap-2'>
                                    {link.Icon}
                                    {link.name}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;