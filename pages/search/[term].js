import { useRouter } from 'next/router';

export default function Term() {
    const router = useRouter();

    console.log(router.query);
    
    return <h2>{router.query.term}</h2>
}