import { ReactNode } from "react"

interface Props {
    children: ReactNode
    title?: string
}

export default function AuthLayout({ children, title }: Props) {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
