import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'আমার কথা',
  description: 'কলমকথা ব্লগ ও এর লেখক সম্পর্কে।',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 md:py-20">
      <p className="mb-3 text-sm font-medium text-primary">আমার কথা</p>
      <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
        নমস্কার, আসসালামু আলাইকুম।
      </h1>
      <div className="mt-8 flex flex-col gap-6 text-lg leading-loose">
        <p>
          কলমকথা আমার ব্যক্তিগত খাতা — যেখানে লিখি স্মৃতির কথা, ঘুরে বেড়ানোর গল্প, প্রিয় বইয়ের কথা আর
          প্রতিদিনের ছোট ছোট অনুভূতি।
        </p>
        <p>
          দিনের বেলা কাজ করি, আর সকাল-সন্ধ্যার ফাঁকে এক কাপ চা নিয়ে বসে পড়ি লিখতে। এখানে কোনো বড়
          তত্ত্ব নেই, আছে শুধু সাধারণ মানুষের সাধারণ গল্প।
        </p>
        <p>
          লেখা ভালো লাগলে বা কিছু বলতে চাইলে চিঠি লিখুন:{' '}
          <a
            href="mailto:hello@kolomkotha.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            hello@kolomkotha.com
          </a>
        </p>
      </div>
      <Link
        href="/"
        className="mt-10 inline-block font-medium text-primary underline-offset-4 hover:underline"
      >
        লেখাগুলো পড়ুন →
      </Link>
    </div>
  )
}
