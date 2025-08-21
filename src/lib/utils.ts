import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function txCn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function cn(
    ...inputs: ClassValue[]
): string {
    return clsx(inputs)
}
