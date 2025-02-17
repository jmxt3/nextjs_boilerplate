import { Flex } from '@radix-ui/themes';
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle';

export default function Navbar() {
    return (
        <Flex direction="row" align="center" justify="between" className='w-full absolute z-10 p-5'>
            <Link href='/' className='font-bond text-2xl'> Super App</Link>
            <Flex direction="row" gap="5">
                <Link href='/performance'> Performance</Link>
                <Link href='/reliability'> Reliability</Link>
                <Link href='/scale'> Scale</Link>
                <ModeToggle />
            </Flex>
        </Flex>
    );
}
