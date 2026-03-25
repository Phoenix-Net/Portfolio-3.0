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
  { tel: '3142822235', label: '314-282-2235', region: 'Main Office' },
  { tel: '3145841540', label: '314-584-1540', region: 'Fax' }
];

const EXTENSIONS: { ext: string; name: string }[] = [
  { ext: '1001', name: 'NOC Admin' },
  { ext: '1005', name: 'Server Rack' },
  { ext: '1006', name: 'Kitchen' },
  { ext: '1007', name: 'Bar Phone' },
  { ext: '1008', name: 'Workshop Phone' },
  { ext: '1009', name: 'Communications Rack' },
  { ext: '1010', name: 'Living Room Phone' },
  { ext: '1101', name: 'Mobility Phone' },
];

const MENUS: { ext: string; name: string }[] = [
  { ext: '8888', name: 'After Hours Recording' },
  { ext: '7777', name: 'Operating Hours Recording' },
];

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
                  ← Return
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

      <section className="py-6 flex-1">
        <div className="container max-w-4xl">

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Phone numbers
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Number</th>
                      <th className="px-4 py-3 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/40">
                    {PHONE_NUMBERS.map((row) => (
                      <tr key={row.tel} className="text-gray-700 dark:text-gray-300">
                        <td className="px-4 py-3 font-medium">{row.label}</td>
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
                Dial the main line, then the extension when prompted.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Extension</th>
                      <th className="px-4 py-3 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {EXTENSIONS.map((row, i) => (
                      <tr
                        key={row.ext}
                        className={`text-gray-700 dark:text-gray-300 ${
                          i % 2 === 0
                            ? 'bg-white dark:bg-gray-900/40'
                            : 'bg-gray-100 dark:bg-gray-800/50'
                        }`}
                      >
                        <td className="px-4 py-3 font-mono font-medium">{row.ext}</td>
                        <td className="px-4 py-3">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Menus, Recordings and Special Features
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Code</th>
                      <th className="px-4 py-3 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {MENUS.map((row, i) => (
                      <tr
                        key={row.ext}
                        className={`text-gray-700 dark:text-gray-300 ${
                          i % 2 === 0
                            ? 'bg-white dark:bg-gray-900/40'
                            : 'bg-gray-100 dark:bg-gray-800/50'
                        }`}
                      >
                        <td className="px-4 py-3 font-mono font-medium">{row.ext}</td>
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

      <div className="container max-w-4xl pb-10">
        <p className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <Image
            src="/images/ftlogo.png"
            alt="FurryTel logo"
            width={28}
            height={28}
            className="shrink-0 rounded-sm"
          />
          <span>
            This Page was inspired by our awesome friends over at{' '}
            <a
              href="https://furrytel.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-header dark:text-blue-300 hover:underline font-medium"
            >
              FurryTel.net
            </a>
          </span>
        </p>
      </div>

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
