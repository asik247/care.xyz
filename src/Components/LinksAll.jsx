'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinksAll = () => {
    const pathname = usePathname();

    const links = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Services', href: '/services' },
        { title: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {links.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={
                            pathname === link.href
                                ? 'text-primary font-bold border-b-2 border-primary'
                                : ''
                        }
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default LinksAll;