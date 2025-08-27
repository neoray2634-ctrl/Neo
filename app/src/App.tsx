import './App.css'
import { Cog, Home, Plus, Rows3 } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useMemo } from 'react'

type Card = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  time: string
}

const recentCards: Card[] = [
  {
    id: '1',
    title: 'Unsaved',
    subtitle: 'Zaya Amune',
    time: '12 Minutes ago',
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-3b1e3b20627a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Dan earrings 203...',
    subtitle: 'Sofia Muller',
    time: '3 Hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?q=80&w=1200&auto=format&fit=crop',
  },
]

const modelCards: Card[] = [
  {
    id: 'm1',
    title: 'Model 1',
    subtitle: '',
    time: '',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'm2',
    title: 'Model 2',
    subtitle: '',
    time: '',
    imageUrl: 'https://images.unsplash.com/photo-1544005316-04ce574a78f2?q=80&w=1200&auto=format&fit=crop',
  },
]

function Avatar() {
  return (
    <div className="h-10 w-10 rounded-full ring-4 ring-white overflow-hidden shadow">
      <img
        src="https://i.pravatar.cc/80?img=12"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  )
}

function SectionHeader({
  title,
  subtitle,
  action,
}: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <div className="font-semibold text-lg">{title}</div>
        {subtitle && <div className="text-sm text-gemzy-subtext -mt-0.5">{subtitle}</div>}
      </div>
      {action}
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute -top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium shadow">
      {children}
    </div>
  )
}

function RecentCard({ card }: { card: Card }) {
  return (
    <div className="relative w-[260px] shrink-0">
      <div className="overflow-hidden rounded-2xl shadow-card">
        <img src={card.imageUrl} alt="" className="h-44 w-full object-cover" />
      </div>
      <Pill>{card.time}</Pill>
      <div className="mt-2">
        <div className="font-semibold">{card.title}</div>
        <div className="flex items-center gap-2 text-sm text-gemzy-subtext mt-1">
          <div className="h-7 w-7 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/60?img=32" alt="" className="h-full w-full object-cover" />
          </div>
          <span>{card.subtitle}</span>
        </div>
      </div>
    </div>
  )
}

function ModelCard({ card }: { card: Card }) {
  return (
    <div className="relative w-[220px] h-[260px] shrink-0 overflow-hidden rounded-2xl shadow-card">
      <img src={card.imageUrl} alt="" className="h-full w-full object-cover" />
    </div>
  )
}

function NavItem({ icon, active }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`h-12 w-16 rounded-2xl flex items-center justify-center transition-all ${
        active ? 'bg-white shadow-card' : 'bg-transparent'
      }`}
    >
      {icon}
    </button>
  )
}

export default function App() {
  const navIconSize = 22
  const navItems = useMemo(
    () => [
      <Home key="home" size={navIconSize} />, 
      <Plus key="plus" size={navIconSize} />, 
      <Rows3 key="rows" size={navIconSize} />
    ],
    []
  )

  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="min-h-screen bg-gradient-to-b from-[#F6EEFF] to-white">
        <div className="mx-auto max-w-[420px] pb-24">
          {/* Header */}
          <div className="px-4 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <div className="text-sm text-gemzy-subtext">Good morning,</div>
                  <div className="text-2xl font-bold">Neo Kapah</div>
                </div>
              </div>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center">
                    <Cog size={18} />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Content className="rounded-md bg-black text-white text-xs px-2 py-1">
                  Settings
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          </div>

          {/* Recent collections */}
          <div className="px-4 mt-6">
            <SectionHeader
              title="Recent collections"
              subtitle="See your latest projects"
              action={
                <button className="h-9 w-9 rounded-full bg-white shadow-card flex items-center justify-center">
                  <span className="sr-only">Open</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              }
            />

            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {recentCards.map((c) => (
                <RecentCard key={c.id} card={c} />
              ))}
            </div>
          </div>

          {/* Models */}
          <div className="px-4 mt-6">
            <SectionHeader
              title="Gemzy Models"
              subtitle="Use our latest models"
              action={
                <button className="h-9 w-9 rounded-full bg-white shadow-card flex items-center justify-center">
                  <span className="sr-only">Open</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              }
            />
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {modelCards.map((c) => (
                <ModelCard key={c.id} card={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-4">
          <div className="mx-auto flex items-center justify-around rounded-3xl bg-black/5 backdrop-blur p-2">
            {navItems.map((icon, idx) => (
              <NavItem key={idx} icon={icon} active={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  )
}
