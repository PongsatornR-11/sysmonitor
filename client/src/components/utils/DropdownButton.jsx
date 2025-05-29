import React, { useState } from 'react';
import { AlignJustify, House, Cpu, MemoryStick, HardDrive, Network } from 'lucide-react';

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: <House />, href: '/' },
        { name: <Cpu />, href: '/cpu' },
        { name: <MemoryStick />, href: '/memory' },
        { name: <HardDrive />, href: '/disk' },
        { name: <Network />, href: '/network' },
    ];

    return (
        <div className="home-page inline-block text-left border p-3 rounded-md cursor-pointer" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <button
                type="button"
                className="inline-flex w-full justify-center"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
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
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;