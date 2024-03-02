import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link
                href="/"
                className="sidebar-logo"
            >
                <Image src="/assets/images/imagify-logo-text.jpg" alt="logo" width={150} height={22} />
            </Link>
        </div>

    </aside>
  )
}

export default Sidebar