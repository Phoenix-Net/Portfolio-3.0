import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaWifi, FaEnvelope } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Directory | PhoenixNet-Labs',
  description: 'Phone directory and dial-plan reference for PhoenixNet-Labs.',
};

/** Replace with your real numbers and routes — dummy data for layout only */
const PHONE_NUMBERS: { tel: string; label: string; region: string }[] = [
  { tel: '+15550100', label: '555-0100', region: 'United States' },
  { tel: '+15550101', label: '555-0101', region: 'Canada' },
  { tel: '+15550102', label: '555-0102', region: 'Fax (US)' },
];

const MAIN_LINE = '15550100';

const EXTENSIONS: { ext: string; name: string }[] = [
  { ext: '0', name: 'Operator' },
  { ext: '1001', name: 'Lab — Rack A' },
  { ext: '1002', name: 'Lab — Rack B' },
  { ext: '1003', name: 'NOC Display 1' },
  { ext: '1004', name: 'NOC Display 2' },
  { ext: '2329', name: 'Document fax' },
  { ext: '611', name: 'Trouble & repair' },
];

const MENUS: { ext: string; name: string }[] = [
  { ext: '674', name: 'Leave a message' },
  { ext: '56709', name: 'Hold music — playlist A' },
  { ext: '9001', name: 'Music on hold' },
  { ext: '9002', name: 'Music on hold (alt)' },
];

function telMain(ext?: string) {
  const base = MAIN_LINE.replace(/\D/g, '');
  if (!ext) return `tel:${base}`;
  return `tel:${base},${ext.replace(/\D/g, '')}`;
}

export default function DirectoryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] text-white py-12">
        <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-[8deg] cursor-pointer relative shrink-0">
              <Image
                src="/images/pnet-logo.png"
                alt="PhoenixNet-Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-sm text-white/80 mb-1">
                <Link href="/" className="hover:underline">
                  ← PhoenixNet-Labs
                </Link>
              </p>
              <h1 className="text-4xl font-bold mb-2">Directory</h1>
              <p className="text-xl text-gray-200">
                <em>Phone numbers, extensions, and recordings</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex-1">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-header dark:text-white mb-8">Dial plan</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Phone numbers
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Number</th>
                      <th className="px-4 py-3 font-semibold">Region / note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/40">
                    {PHONE_NUMBERS.map((row) => (
                      <tr key={row.tel} className="text-gray-700 dark:text-gray-300">
                        <td className="px-4 py-3">
                          <a
                            href={`tel:${row.tel.replace(/\D/g, '')}`}
                            className="text-header dark:text-blue-300 hover:underline font-medium"
                          >
                            {row.label}
                          </a>
                        </td>
                        <td className="px-4 py-3">{row.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Extensions
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Dial the main line, then the extension when prompted (or use links below).
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Extension</th>
                      <th className="px-4 py-3 font-semibold">Destination</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/40">
                    {EXTENSIONS.map((row) => (
                      <tr key={row.ext} className="text-gray-700 dark:text-gray-300">
                        <td className="px-4 py-3">
                          <a
                            href={telMain(row.ext)}
                            className="text-header dark:text-blue-300 hover:underline font-mono font-medium"
                          >
                            {row.ext}
                          </a>
                        </td>
                        <td className="px-4 py-3">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Menus and recordings
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Code</th>
                      <th className="px-4 py-3 font-semibold">Recording / menu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/40">
                    {MENUS.map((row) => (
                      <tr key={row.ext} className="text-gray-700 dark:text-gray-300">
                        <td className="px-4 py-3">
                          <a
                            href={telMain(row.ext)}
                            className="text-header dark:text-blue-300 hover:underline font-mono font-medium"
                          >
                            {row.ext}
                          </a>
                        </td>
                        <td className="px-4 py-3">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-footer-light dark:bg-footer-dark text-white py-8 mt-auto">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center text-white text-sm relative transition-all duration-300 hover:scale-110 hover:rotate-[8deg] cursor-pointer">
              <Image
                src="/images/pnet-logo.png"
                alt="PhoenixNet-Labs Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold">PhoenixNet-Labs</p>
              <p className="text-sm">2017-2026</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              href="https://bsky.app/profile/phoenixnet-labs.com"
              className="text-white hover:text-white/80"
              aria-label="Bluesky"
            >
              <FaBluesky className="w-6 h-6" />
            </a>
            <a href="https://github.com/Phoenix-Net" className="text-white hover:text-white/80" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://status.phoenixnet-labs.com"
              className="text-white hover:text-white/80"
              aria-label="Status"
            >
              <FaWifi className="w-6 h-6" />
            </a>
            <a
              href="mailto:support@phoenixnet-labs.com"
              className="text-white hover:text-white/80"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
