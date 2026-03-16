"use client";

import React from 'react';
import { useState } from 'react';

const GREEN = '#27ae60';
const GREEN_LIGHT = '#2ecc71';
const GREEN_DARK = '#1a7a42';
const GREEN_BG = '#eafaf1';
const GOLD = '#f39c12';
const PURPLE = '#8e44ad';

// ─── ICONS ─────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20, color = 'currentColor', style }: { name: string; size?: number; color?: string; style?: React.CSSProperties }) => {
    const icons: Record<string, React.ReactNode> = {
        home: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
        wallet: (
            <>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M16 13a1 1 0 100-2 1 1 0 000 2z" />
            </>
        ),
        trending: (
            <>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </>
        ),
        user: (
            <>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </>
        ),
        bell: (
            <>
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
            </>
        ),
        search: (
            <>
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
            </>
        ),
        plus: (
            <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </>
        ),
        arrow_right: <polyline points="9 18 15 12 9 6" />,
        arrow_left: <polyline points="15 18 9 12 15 6" />,
        check: <polyline points="20 6 9 12 4 9" />,
        star: (
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        ),
        gift: (
            <>
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
            </>
        ),
        leaf: (
            <path d="M2 22c1.25-1.25 2.5-2.5 3.75-3.75C8.5 20.5 12 22 16 20s6-6 4-10-6-6-10-4-4 8-2 12" />
        ),
        coins: (
            <>
                <circle cx="8" cy="8" r="6" />
                <path d="M18.09 10.37A6 6 0 1110.34 18" />
                <path d="M7 6h1v4" />
                <path d="M16.71 13.88L17.7 14.9 16.7 15.9" />
            </>
        ),
        store: (
            <>
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </>
        ),
        fire: (
            <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z" />
        ),
        map_pin: (
            <>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </>
        ),
        chart: (
            <>
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </>
        ),
        zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
        clock: (
            <>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </>
        ),
        shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
        check_circle: (
            <>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </>
        ),
        edit: (
            <>
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </>
        ),
        share: (
            <>
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </>
        ),
        eye: (
            <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </>
        ),
        logout: (
            <>
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
            </>
        ),
        award: (
            <>
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </>
        ),
        percent: (
            <>
                <line x1="19" y1="5" x2="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
            </>
        ),
        refresh: (
            <>
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </>
        ),
        package: (
            <>
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </>
        ),
    };
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            {icons[name]}
        </svg>
    );
};

// ─── PHONE FRAME ─────────────────────────────────────────────────────────
const PhoneFrame = ({ children, bg = '#f0fdf4' }: { children: React.ReactNode; bg?: string }) => (
    <div
        style={{
            width: '100%',
            maxWidth: 375,
            minHeight: 812,
            background: bg,
            borderRadius: 44,
            overflow: 'hidden',
            position: 'relative',
            boxShadow:
                '0 40px 120px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.15)',
            border: '10px solid #1a2e23',
            fontFamily: "'Nunito', sans-serif",
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        {/* Status bar */}
        <div
            style={{
                background: 'transparent',
                padding: '14px 28px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 10,
            }}
        >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1a2e23' }}>
                9:41
            </span>
            <div
                style={{
                    width: 126,
                    height: 34,
                    background: '#1a2e23',
                    borderRadius: 20,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: 8,
                }}
            />
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {[4, 3, 2].map((h) => (
                    <div
                        key={h}
                        style={{
                            width: 4,
                            height: h * 4,
                            background: '#1a2e23',
                            borderRadius: 2,
                        }}
                    />
                ))}
                <div
                    style={{
                        width: 16,
                        height: 10,
                        border: '2px solid #1a2e23',
                        borderRadius: 3,
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            right: -4,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 3,
                            height: 5,
                            background: '#1a2e23',
                            borderRadius: '0 2px 2px 0',
                        }}
                    />
                    <div
                        style={{
                            width: '75%',
                            height: '100%',
                            background: GREEN,
                            borderRadius: 1,
                        }}
                    />
                </div>
            </div>
        </div>
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            {children}
        </div>
    </div>
);

// ─── BOTTOM NAV ──────────────────────────────────────────────────────────
const BottomNav = ({ items, active, onSelect }: { items: any[]; active: string | null; onSelect: (key: string) => void }) => (
    <div
        style={{
            background: '#fff',
            borderTop: '1px solid #e8f5e9',
            display: 'flex',
            padding: '8px 0 20px',
            boxShadow: '0 -4px 20px rgba(39,174,96,0.08)',
        }}
    >
        {items.map((item) => (
            <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: active === item.key ? GREEN : '#aab9b0',
                    padding: '4px 0',
                    transition: 'all 0.2s',
                }}
            >
                <div
                    style={{
                        transform: active === item.key ? 'translateY(-1px)' : 'none',
                        transition: 'transform 0.2s',
                    }}
                >
                    <Icon
                        name={item.icon}
                        size={22}
                        color={active === item.key ? GREEN : '#aab9b0'}
                    />
                </div>
                <span
                    style={{ fontSize: 10, fontWeight: active === item.key ? 700 : 500 }}
                >
                    {item.label}
                </span>
                {active === item.key && (
                    <div
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: GREEN,
                            marginTop: -2,
                        }}
                    />
                )}
            </button>
        ))}
    </div>
);

// ─── SECTION HEADER ──────────────────────────────────────────────────────
const SectionHeader = ({ title, subtitle, back, onBack }: { title: string; subtitle: string; back?: string; onBack?: () => void }) => (
    <div style={{ padding: '20px 24px 16px', background: '#fff' }}>
        {back && (
            <button
                onClick={onBack}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    border: 'none',
                    background: 'transparent',
                    color: GREEN,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    padding: 0,
                    marginBottom: 12,
                }}
            >
                <Icon name="arrow_left" size={18} color={GREEN} /> {back}
            </button>
        )}
        <h2
            style={{
                fontSize: 22,
                fontWeight: 900,
                color: '#1a2e23',
                margin: 0,
                letterSpacing: -0.5,
            }}
        >
            {title}
        </h2>
        {subtitle && (
            <p
                style={{
                    fontSize: 13,
                    color: '#6b8f75',
                    margin: '4px 0 0',
                    fontWeight: 400,
                }}
            >
                {subtitle}
            </p>
        )}
    </div>
);

// ══════════════════════════════════════════════════════════════════════════
// EMPREENDEDOR SCREENS
// ══════════════════════════════════════════════════════════════════════════

const EmpHome = ({ navigate }: { navigate: (screen: string) => void }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Header gradient */}
        <div
            style={{
                background: `linear-gradient(135deg, ${GREEN_DARK} 0%, ${GREEN} 100%)`,
                padding: '24px 24px 32px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}
            >
                <div>
                    <p
                        style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: 0 }}
                    >
                        Olá, empreendedor 👋
                    </p>
                    <h2
                        style={{
                            color: '#fff',
                            fontSize: 22,
                            fontWeight: 900,
                            margin: '4px 0 0',
                            letterSpacing: -0.5,
                        }}
                    >
                        Café da Selva
                    </h2>
                </div>
                <button
                    style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: 'none',
                        borderRadius: 12,
                        padding: 10,
                        cursor: 'pointer',
                        position: 'relative',
                    }}
                >
                    <Icon name="bell" size={20} color="#fff" />
                    <div
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            width: 8,
                            height: 8,
                            background: GOLD,
                            borderRadius: '50%',
                            border: '2px solid #27ae60',
                        }}
                    />
                </button>
            </div>
            {/* Balance cards */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                    marginTop: 20,
                }}
            >
                {[
                    {
                        label: 'Captado este mês',
                        value: 'R$ 3.420',
                        icon: 'trending',
                        delta: '+18%',
                    },
                    {
                        label: 'Tokens emitidos',
                        value: '240 TREDs',
                        icon: 'coins',
                        delta: 'Ativos',
                    },
                ].map((c) => (
                    <div
                        key={c.label}
                        style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: 16,
                            padding: 14,
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 8,
                            }}
                        >
                            <Icon name={c.icon} size={16} color="rgba(255,255,255,0.8)" />
                            <span
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    color: '#fff',
                                    fontSize: 10,
                                    fontWeight: 700,
                                    padding: '2px 8px',
                                    borderRadius: 100,
                                }}
                            >
                                {c.delta}
                            </span>
                        </div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: 11,
                                margin: 0,
                            }}
                        >
                            {c.label}
                        </p>
                        <p
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 900,
                                margin: '2px 0 0',
                                letterSpacing: -0.5,
                            }}
                        >
                            {c.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        <div
            style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}
        >
            {/* CTA */}
            <button
                onClick={() => navigate('emp_campaign')}
                style={{
                    background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN_DARK} 100%)`,
                    border: 'none',
                    borderRadius: 16,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(39,174,96,0.35)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                        style={{
                            width: 44,
                            height: 44,
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Icon name="plus" size={22} color="#fff" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p
                            style={{
                                color: '#fff',
                                fontWeight: 800,
                                fontSize: 15,
                                margin: 0,
                            }}
                        >
                            Criar nova campanha
                        </p>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.75)',
                                fontSize: 12,
                                margin: '2px 0 0',
                            }}
                        >
                            Tokenize sua produção futura
                        </p>
                    </div>
                </div>
                <Icon name="arrow_right" size={20} color="rgba(255,255,255,0.8)" />
            </button>

            {/* Active campaigns */}
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 14,
                    }}
                >
                    <h3
                        style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: '#1a2e23',
                            margin: 0,
                        }}
                    >
                        Campanhas ativas
                    </h3>
                    <button
                        style={{
                            border: 'none',
                            background: 'transparent',
                            color: GREEN,
                            fontSize: 13,
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        Ver todas
                    </button>
                </div>
                {[
                    {
                        name: 'Blend Especial Jun/26',
                        raised: 1840,
                        goal: 2500,
                        tokens: 92,
                        days: 12,
                        cat: 'Café',
                    },
                    {
                        name: 'Kit Barista Premium',
                        raised: 580,
                        goal: 1000,
                        tokens: 29,
                        days: 5,
                        cat: 'Kit',
                    },
                ].map((c) => (
                    <div
                        key={c.name}
                        onClick={() => navigate('emp_campaign_detail')}
                        style={{
                            background: '#fff',
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 12,
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            border: '1px solid #e8f5e9',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: 10,
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        background: GREEN_BG,
                                        color: GREEN_DARK,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        padding: '3px 10px',
                                        borderRadius: 100,
                                    }}
                                >
                                    {c.cat}
                                </span>
                                <p
                                    style={{
                                        fontWeight: 800,
                                        fontSize: 14,
                                        color: '#1a2e23',
                                        margin: '6px 0 0',
                                    }}
                                >
                                    {c.name}
                                </p>
                            </div>
                            <span style={{ fontSize: 11, color: '#6b8f75', fontWeight: 600 }}>
                                ⏳ {c.days}d restantes
                            </span>
                        </div>
                        {/* Progress */}
                        <div
                            style={{
                                background: '#e8f5e9',
                                borderRadius: 100,
                                height: 7,
                                marginBottom: 8,
                            }}
                        >
                            <div
                                style={{
                                    width: `${Math.round((c.raised / c.goal) * 100)}%`,
                                    height: '100%',
                                    background: `linear-gradient(90deg, ${GREEN_LIGHT}, ${GREEN})`,
                                    borderRadius: 100,
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span
                                style={{ fontSize: 12, color: GREEN_DARK, fontWeight: 700 }}
                            >
                                R$ {c.raised.toLocaleString()} captados
                            </span>
                            <span style={{ fontSize: 12, color: '#6b8f75' }}>
                                {Math.round((c.raised / c.goal) * 100)}% de R${' '}
                                {c.goal.toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick stats */}
            <div>
                <h3
                    style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: '#1a2e23',
                        margin: '0 0 14px',
                    }}
                >
                    Desempenho rápido
                </h3>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: 10,
                    }}
                >
                    {[
                        { label: 'Apoiadores', value: '47', icon: 'user' },
                        { label: 'TILs dist.', value: '820', icon: 'gift' },
                        { label: 'Recorrentes', value: '31', icon: 'refresh' },
                    ].map((s) => (
                        <div
                            key={s.label}
                            style={{
                                background: '#fff',
                                borderRadius: 14,
                                padding: '14px 10px',
                                textAlign: 'center',
                                border: '1px solid #e8f5e9',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            }}
                        >
                            <Icon name={s.icon} size={20} color={GREEN} />
                            <p
                                style={{
                                    fontSize: 20,
                                    fontWeight: 900,
                                    color: '#1a2e23',
                                    margin: '6px 0 2px',
                                }}
                            >
                                {s.value}
                            </p>
                            <p style={{ fontSize: 10, color: '#6b8f75', margin: 0 }}>
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const EmpCampaign = ({ navigate }: { navigate: (screen: string) => void }) => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: '',
        goal: '',
        days: '30',
        desc: '',
    });

    return (
        <div style={{ flex: 1, overflowY: 'auto' }}>
            <SectionHeader
                title="Nova Campanha"
                subtitle="Tokenize sua produção futura"
                back="Início"
                onBack={() => navigate('emp_home')}
            />

            {/* Steps */}
            <div style={{ padding: '0 24px 16px', display: 'flex', gap: 8 }}>
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        style={{
                            flex: 1,
                            height: 4,
                            borderRadius: 100,
                            background: s <= step ? GREEN : '#d5f5e3',
                        }}
                    />
                ))}
            </div>

            <div
                style={{
                    padding: '0 24px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                }}
            >
                {step === 1 && (
                    <>
                        <div
                            style={{
                                background: GREEN_BG,
                                borderRadius: 16,
                                padding: 16,
                                border: '1px solid #d5f5e3',
                                display: 'flex',
                                gap: 12,
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    background: GREEN,
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <Icon name="package" size={20} color="#fff" />
                            </div>
                            <p
                                style={{
                                    fontSize: 13,
                                    color: GREEN_DARK,
                                    fontWeight: 600,
                                    margin: 0,
                                }}
                            >
                                Crie tokens ligados a{' '}
                                <strong>produtos, experiências ou serviços futuros</strong> do
                                seu negócio.
                            </p>
                        </div>
                        {[
                            {
                                label: 'Nome da campanha',
                                key: 'name',
                                placeholder: 'Ex: Blend Especial Colheita Jun/26',
                                type: 'text',
                            },
                            {
                                label: 'Objetivo de captação (R$)',
                                key: 'goal',
                                placeholder: 'Ex: 2500',
                                type: 'number',
                            },
                            {
                                label: 'Duração (dias)',
                                key: 'days',
                                placeholder: '30',
                                type: 'number',
                            },
                        ].map((f) => (
                            <div key={f.key}>
                                <label
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: '#1a2e23',
                                        display: 'block',
                                        marginBottom: 6,
                                    }}
                                >
                                    {f.label}
                                </label>
                                <input
                                    type={f.type}
                                    placeholder={f.placeholder}
                                    value={form[f.key]}
                                    onChange={(e) =>
                                        setForm({ ...form, [f.key]: e.target.value })
                                    }
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: 12,
                                        border: '2px solid #d5f5e3',
                                        fontSize: 14,
                                        background: '#fff',
                                        outline: 'none',
                                        fontFamily: 'inherit',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                        ))}
                    </>
                )}
                {step === 2 && (
                    <>
                        <p
                            style={{
                                fontSize: 14,
                                color: '#6b8f75',
                                fontWeight: 600,
                                margin: 0,
                            }}
                        >
                            Descreva o que o apoiador recebe ao comprar tokens desta campanha.
                        </p>
                        <div>
                            <label
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: '#1a2e23',
                                    display: 'block',
                                    marginBottom: 6,
                                }}
                            >
                                Descrição dos benefícios
                            </label>
                            <textarea
                                placeholder="Ex: Cada token equivale a 250g do café especial Blend de Junho. Entrega no estabelecimento ou envio pelo correio."
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '14px 16px',
                                    borderRadius: 12,
                                    border: '2px solid #d5f5e3',
                                    fontSize: 14,
                                    background: '#fff',
                                    outline: 'none',
                                    fontFamily: 'inherit',
                                    resize: 'none',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: '#1a2e23',
                                    display: 'block',
                                    marginBottom: 8,
                                }}
                            >
                                Categoria do token
                            </label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {[
                                    'Produto físico',
                                    'Experiência',
                                    'Serviço',
                                    'Desconto futuro',
                                ].map((cat) => (
                                    <button
                                        key={cat}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: 100,
                                            border: `2px solid ${cat === 'Produto físico' ? GREEN : '#d5f5e3'
                                                }`,
                                            background: cat === 'Produto físico' ? GREEN_BG : '#fff',
                                            color: cat === 'Produto físico' ? GREEN_DARK : '#6b8f75',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        <div
                            style={{
                                background: '#fff',
                                borderRadius: 16,
                                border: '2px solid #d5f5e3',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    background: `linear-gradient(135deg, ${GREEN_DARK}, ${GREEN})`,
                                    padding: '16px 20px',
                                }}
                            >
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                                    Resumo da campanha
                                </span>
                                <p
                                    style={{
                                        color: '#fff',
                                        fontWeight: 900,
                                        fontSize: 18,
                                        margin: '4px 0 0',
                                    }}
                                >
                                    Blend Especial Jun/26
                                </p>
                            </div>
                            <div
                                style={{
                                    padding: 16,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12,
                                }}
                            >
                                {[
                                    { label: 'Objetivo', value: 'R$ 2.500,00' },
                                    { label: 'Duração', value: '30 dias' },
                                    { label: 'Tokens a emitir', value: '100 TREDs' },
                                    { label: 'Valor por token', value: 'R$ 25,00' },
                                    {
                                        label: 'TILs bônus para apoiadores',
                                        value: '50 TILs / token',
                                    },
                                ].map((r) => (
                                    <div
                                        key={r.label}
                                        style={{ display: 'flex', justifyContent: 'space-between' }}
                                    >
                                        <span style={{ fontSize: 13, color: '#6b8f75' }}>
                                            {r.label}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: '#1a2e23',
                                            }}
                                        >
                                            {r.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            style={{
                                background: '#fff3cd',
                                borderRadius: 12,
                                padding: 14,
                                border: '1px solid #ffc107',
                                display: 'flex',
                                gap: 10,
                            }}
                        >
                            <Icon name="shield" size={18} color={GOLD} />
                            <p style={{ fontSize: 12, color: '#856404', margin: 0 }}>
                                Sua campanha passará por uma <strong>curadoria rápida</strong>{' '}
                                antes de ser publicada (até 24h).
                            </p>
                        </div>
                    </>
                )}

                <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                    {step > 1 && (
                        <button
                            onClick={() => setStep((s) => s - 1)}
                            style={{
                                flex: 1,
                                padding: 16,
                                borderRadius: 14,
                                border: `2px solid ${GREEN}`,
                                background: '#fff',
                                color: GREEN,
                                fontWeight: 800,
                                fontSize: 15,
                                cursor: 'pointer',
                            }}
                        >
                            Voltar
                        </button>
                    )}
                    <button
                        onClick={() =>
                            step < 3 ? setStep((s) => s + 1) : navigate('emp_success')
                        }
                        style={{
                            flex: 2,
                            padding: 16,
                            borderRadius: 14,
                            border: 'none',
                            background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: 15,
                            cursor: 'pointer',
                            boxShadow: '0 6px 20px rgba(39,174,96,0.35)',
                        }}
                    >
                        {step === 3 ? '🚀 Publicar campanha' : 'Continuar →'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const EmpSuccess = ({ navigate }) => (
    <div
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            textAlign: 'center',
        }}
    >
        <div
            style={{
                width: 100,
                height: 100,
                background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 12px 40px rgba(39,174,96,0.4)',
            }}
        >
            <Icon name="check_circle" size={52} color="#fff" />
        </div>
        <h2
            style={{
                fontSize: 26,
                fontWeight: 900,
                color: '#1a2e23',
                margin: '0 0 12px',
                letterSpacing: -0.5,
            }}
        >
            Campanha enviada!
        </h2>
        <p
            style={{
                fontSize: 15,
                color: '#6b8f75',
                lineHeight: 1.6,
                margin: '0 0 32px',
            }}
        >
            Sua campanha <strong>Blend Especial Jun/26</strong> foi enviada para
            curadoria. Em até 24h ela estará disponível para a comunidade.
        </p>
        <div
            style={{
                background: GREEN_BG,
                borderRadius: 16,
                padding: 20,
                width: '100%',
                marginBottom: 24,
                border: '1px solid #d5f5e3',
            }}
        >
            <p
                style={{ fontSize: 13, color: GREEN_DARK, fontWeight: 600, margin: 0 }}
            >
                🌱 Quando aprovada, você receberá uma notificação e sua campanha ficará
                visível para <strong>consumidores e investidores</strong> da comunidade.
            </p>
        </div>
        <button
            onClick={() => navigate('emp_home')}
            style={{
                width: '100%',
                padding: 16,
                borderRadius: 14,
                border: 'none',
                background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                color: '#fff',
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(39,174,96,0.35)',
            }}
        >
            Ir para o painel
        </button>
    </div>
);

const EmpFidelity = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <SectionHeader
            title="Programa de Fidelidade"
            subtitle="Gerencie seus tokens TIL"
        />
        <div
            style={{
                padding: '0 24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
            }}
        >
            {/* TIL balance */}
            <div
                style={{
                    background: `linear-gradient(135deg, ${PURPLE} 0%, #6c3483 100%)`,
                    borderRadius: 20,
                    padding: 20,
                    color: '#fff',
                }}
            >
                <p style={{ margin: 0, opacity: 0.8, fontSize: 13 }}>
                    TILs distribuídos aos clientes
                </p>
                <p
                    style={{
                        margin: '6px 0 0',
                        fontSize: 36,
                        fontWeight: 900,
                        letterSpacing: -1,
                    }}
                >
                    820 <span style={{ fontSize: 18, fontWeight: 600 }}>TILs</span>
                </p>
                <div
                    style={{
                        height: 1,
                        background: 'rgba(255,255,255,0.2)',
                        margin: '14px 0',
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p style={{ margin: 0, opacity: 0.7, fontSize: 11 }}>Resgatados</p>
                        <p style={{ margin: '2px 0 0', fontWeight: 800, fontSize: 16 }}>
                            340
                        </p>
                    </div>
                    <div>
                        <p style={{ margin: 0, opacity: 0.7, fontSize: 11 }}>Pendentes</p>
                        <p style={{ margin: '2px 0 0', fontWeight: 800, fontSize: 16 }}>
                            480
                        </p>
                    </div>
                    <div>
                        <p style={{ margin: 0, opacity: 0.7, fontSize: 11 }}>
                            Clientes ativos
                        </p>
                        <p style={{ margin: '2px 0 0', fontWeight: 800, fontSize: 16 }}>
                            47
                        </p>
                    </div>
                </div>
            </div>

            {/* Config */}
            <div
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    padding: 18,
                    border: '1px solid #e8f5e9',
                }}
            >
                <h3
                    style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: '#1a2e23',
                        margin: '0 0 14px',
                    }}
                >
                    Configuração de recompensas
                </h3>
                {[
                    { label: 'TILs por compra (R$ 10)', value: '5 TILs', icon: 'coins' },
                    { label: 'Bônus por indicação', value: '20 TILs', icon: 'share' },
                    { label: 'Resgate (100 TILs)', value: '10% desc.', icon: 'percent' },
                ].map((r) => (
                    <div
                        key={r.label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            borderBottom: '1px solid #f0fdf4',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    background: GREEN_BG,
                                    borderRadius: 10,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon name={r.icon} size={16} color={GREEN} />
                            </div>
                            <span style={{ fontSize: 13, color: '#2d4a38', fontWeight: 600 }}>
                                {r.label}
                            </span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 800, color: GREEN_DARK }}>
                            {r.value}
                        </span>
                    </div>
                ))}
                <button
                    style={{
                        width: '100%',
                        marginTop: 14,
                        padding: 12,
                        borderRadius: 12,
                        border: `2px solid ${GREEN}`,
                        background: GREEN_BG,
                        color: GREEN_DARK,
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                    }}
                >
                    ✏️ Editar configurações
                </button>
            </div>

            {/* Recent activity */}
            <div>
                <h3
                    style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: '#1a2e23',
                        margin: '0 0 12px',
                    }}
                >
                    Atividade recente
                </h3>
                {[
                    {
                        name: 'Mariana S.',
                        action: 'Resgatou 100 TILs → 10% desc.',
                        time: 'Hoje, 14:22',
                        type: 'redeem',
                    },
                    {
                        name: 'João P.',
                        action: 'Acumulou 25 TILs (compra)',
                        time: 'Hoje, 11:05',
                        type: 'earn',
                    },
                    {
                        name: 'Ana F.',
                        action: 'Indicou cliente → +20 TILs',
                        time: 'Ontem, 18:30',
                        type: 'bonus',
                    },
                ].map((a) => (
                    <div
                        key={a.name}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '12px 0',
                            borderBottom: '1px solid #f0fdf4',
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: a.type === 'redeem' ? '#fef9ec' : GREEN_BG,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Icon
                                name={
                                    a.type === 'redeem'
                                        ? 'percent'
                                        : a.type === 'bonus'
                                            ? 'star'
                                            : 'coins'
                                }
                                size={18}
                                color={a.type === 'redeem' ? GOLD : GREEN}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: '#1a2e23',
                                }}
                            >
                                {a.name}
                            </p>
                            <p style={{ margin: '2px 0 0', fontSize: 12, color: '#6b8f75' }}>
                                {a.action}
                            </p>
                        </div>
                        <span style={{ fontSize: 11, color: '#aab9b0' }}>{a.time}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ══════════════════════════════════════════════════════════════════════════
// CONSUMIDOR SCREENS
// ══════════════════════════════════════════════════════════════════════════

const ConsHome = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <div
            style={{
                background: `linear-gradient(160deg, #1a2e23 0%, ${GREEN_DARK} 60%, ${GREEN} 100%)`,
                padding: '24px 24px 36px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 20,
                }}
            >
                <div>
                    <p
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, margin: 0 }}
                    >
                        Bem-vinda de volta 🌱
                    </p>
                    <h2
                        style={{
                            color: '#fff',
                            fontSize: 22,
                            fontWeight: 900,
                            margin: '4px 0 0',
                            letterSpacing: -0.5,
                        }}
                    >
                        Camila Rocha
                    </h2>
                </div>
                <button
                    style={{
                        background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 12,
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <Icon name="search" size={20} color="#fff" />
                </button>
            </div>
            {/* TIL card */}
            <div
                style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 20,
                    padding: '18px 20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: 12,
                                margin: 0,
                            }}
                        >
                            Seus Tokens de Impacto Local
                        </p>
                        <p
                            style={{
                                color: '#fff',
                                fontSize: 32,
                                fontWeight: 900,
                                margin: '4px 0 0',
                                letterSpacing: -1,
                            }}
                        >
                            485 <span style={{ fontSize: 16, fontWeight: 600 }}>TILs</span>
                        </p>
                    </div>
                    <div
                        style={{
                            background: GREEN,
                            borderRadius: 14,
                            padding: '10px 16px',
                            boxShadow: '0 4px 16px rgba(46,204,113,0.4)',
                        }}
                    >
                        <Icon name="gift" size={24} color="#fff" />
                    </div>
                </div>
                <div
                    style={{
                        height: 1,
                        background: 'rgba(255,255,255,0.15)',
                        margin: '14px 0 12px',
                    }}
                />
                <div style={{ display: 'flex', gap: 20 }}>
                    <div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: 11,
                                margin: 0,
                            }}
                        >
                            Próximo resgate
                        </p>
                        <p
                            style={{
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: 14,
                                margin: '2px 0 0',
                            }}
                        >
                            100 TILs → R$ 10 desc.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('cons_redeem')}
                        style={{
                            marginLeft: 'auto',
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: 10,
                            padding: '8px 16px',
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        Resgatar
                    </button>
                </div>
            </div>
        </div>

        <div
            style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}
        >
            {/* Category chips */}
            <div
                style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}
            >
                {[
                    '🌿 Todos',
                    '☕ Café',
                    '🍞 Padaria',
                    '🌾 Orgânicos',
                    '🎨 Artesanato',
                ].map((c, i) => (
                    <button
                        key={c}
                        style={{
                            padding: '8px 16px',
                            borderRadius: 100,
                            border: `2px solid ${i === 0 ? GREEN : '#d5f5e3'}`,
                            background: i === 0 ? GREEN_BG : '#fff',
                            color: i === 0 ? GREEN_DARK : '#6b8f75',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Campaigns */}
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 14,
                    }}
                >
                    <h3
                        style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: '#1a2e23',
                            margin: 0,
                        }}
                    >
                        Campanhas no bairro
                    </h3>
                    <button
                        style={{
                            border: 'none',
                            background: 'transparent',
                            color: GREEN,
                            fontSize: 13,
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        Ver mapa
                    </button>
                </div>
                {[
                    {
                        biz: 'Café da Selva',
                        name: 'Blend Especial Jun/26',
                        price: 'R$ 25',
                        til: '+50 TILs',
                        progress: 74,
                        days: 12,
                        tag: '☕ Café',
                        hot: true,
                    },
                    {
                        biz: 'Ateliê Cores Vivas',
                        name: 'Coleção Cerâmica Artesanal',
                        price: 'R$ 45',
                        til: '+90 TILs',
                        progress: 40,
                        days: 20,
                        tag: '🎨 Arte',
                        hot: false,
                    },
                    {
                        biz: 'Horta do Pedro',
                        name: 'Cesta Orgânica Semanal',
                        price: 'R$ 18',
                        til: '+36 TILs',
                        progress: 91,
                        days: 3,
                        tag: '🌾 Orgânico',
                        hot: false,
                    },
                ].map((c) => (
                    <div
                        key={c.name}
                        onClick={() => navigate('cons_campaign')}
                        style={{
                            background: '#fff',
                            borderRadius: 18,
                            overflow: 'hidden',
                            marginBottom: 14,
                            boxShadow: '0 3px 16px rgba(0,0,0,0.07)',
                            cursor: 'pointer',
                            border: '1px solid #e8f5e9',
                        }}
                    >
                        <div
                            style={{
                                background: `linear-gradient(135deg, ${GREEN_DARK}22, ${GREEN}22)`,
                                height: 90,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                            }}
                        >
                            <span style={{ fontSize: 40 }}>{c.tag.split(' ')[0]}</span>
                            {c.hot && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        background: '#e74c3c',
                                        color: '#fff',
                                        fontSize: 10,
                                        fontWeight: 800,
                                        padding: '3px 10px',
                                        borderRadius: 100,
                                    }}
                                >
                                    🔥 Popular
                                </span>
                            )}
                            <span
                                style={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 10,
                                    background: GREEN_BG,
                                    color: GREEN_DARK,
                                    fontSize: 10,
                                    fontWeight: 700,
                                    padding: '3px 10px',
                                    borderRadius: 100,
                                }}
                            >
                                {c.tag}
                            </span>
                        </div>
                        <div style={{ padding: '14px 16px 16px' }}>
                            <p style={{ fontSize: 11, color: '#6b8f75', margin: 0 }}>
                                {c.biz}
                            </p>
                            <p
                                style={{
                                    fontSize: 15,
                                    fontWeight: 800,
                                    color: '#1a2e23',
                                    margin: '4px 0 10px',
                                }}
                            >
                                {c.name}
                            </p>
                            <div
                                style={{
                                    background: '#e8f5e9',
                                    borderRadius: 100,
                                    height: 6,
                                    marginBottom: 8,
                                }}
                            >
                                <div
                                    style={{
                                        width: `${c.progress}%`,
                                        height: '100%',
                                        background: c.progress > 80 ? '#e74c3c' : GREEN,
                                        borderRadius: 100,
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div>
                                    <span
                                        style={{ fontSize: 16, fontWeight: 900, color: GREEN_DARK }}
                                    >
                                        {c.price}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: 12,
                                            color: PURPLE,
                                            fontWeight: 700,
                                            marginLeft: 8,
                                        }}
                                    >
                                        {c.til}
                                    </span>
                                </div>
                                <span style={{ fontSize: 11, color: '#aab9b0' }}>
                                    {c.days}d restantes
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ConsCampaign = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    background: `linear-gradient(135deg, ${GREEN_DARK}, ${GREEN})`,
                    height: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span style={{ fontSize: 70 }}>☕</span>
            </div>
            <button
                onClick={() => navigate('cons_home')}
                style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: 'rgba(0,0,0,0.3)',
                    border: 'none',
                    borderRadius: 10,
                    padding: 8,
                    cursor: 'pointer',
                }}
            >
                <Icon name="arrow_left" size={20} color="#fff" />
            </button>
        </div>

        <div style={{ padding: '20px 24px 32px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 16,
                }}
            >
                <div>
                    <span
                        style={{
                            background: GREEN_BG,
                            color: GREEN_DARK,
                            fontSize: 11,
                            fontWeight: 700,
                            padding: '4px 12px',
                            borderRadius: 100,
                        }}
                    >
                        ☕ Café
                    </span>
                    <h2
                        style={{
                            fontSize: 22,
                            fontWeight: 900,
                            color: '#1a2e23',
                            margin: '8px 0 4px',
                            letterSpacing: -0.5,
                        }}
                    >
                        Blend Especial Jun/26
                    </h2>
                    <p style={{ fontSize: 13, color: '#6b8f75', margin: 0 }}>
                        📍 Café da Selva · Vila Madalena
                    </p>
                </div>
                <button
                    style={{
                        background: GREEN_BG,
                        border: 'none',
                        borderRadius: 12,
                        padding: 10,
                        cursor: 'pointer',
                    }}
                >
                    <Icon name="share" size={20} color={GREEN} />
                </button>
            </div>

            <div
                style={{
                    background: '#f7fdf9',
                    borderRadius: 16,
                    padding: 16,
                    marginBottom: 16,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}
                >
                    <span style={{ fontSize: 13, color: '#6b8f75' }}>Captado</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: GREEN_DARK }}>
                        74% · R$ 1.840 / R$ 2.500
                    </span>
                </div>
                <div style={{ background: '#e8f5e9', borderRadius: 100, height: 10 }}>
                    <div
                        style={{
                            width: '74%',
                            height: '100%',
                            background: `linear-gradient(90deg, ${GREEN_LIGHT}, ${GREEN})`,
                            borderRadius: 100,
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}
                >
                    <span style={{ fontSize: 12, color: '#6b8f75' }}>
                        ⏳ 12 dias restantes
                    </span>
                    <span style={{ fontSize: 12, color: GREEN_DARK, fontWeight: 700 }}>
                        47 apoiadores
                    </span>
                </div>
            </div>

            <p
                style={{
                    fontSize: 14,
                    color: '#2d4a38',
                    lineHeight: 1.7,
                    margin: '0 0 20px',
                }}
            >
                Apoie o Café da Selva e garanta o seu blend especial produzido com grãos
                selecionados da região de Cerrado Mineiro. Cada token equivale a{' '}
                <strong>250g do café finalizado</strong>, com entrega prevista para
                julho de 2026.
            </p>

            <div
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    border: '1px solid #e8f5e9',
                    overflow: 'hidden',
                    marginBottom: 20,
                }}
            >
                <div
                    style={{
                        padding: '12px 16px',
                        background: '#f7fdf9',
                        borderBottom: '1px solid #e8f5e9',
                    }}
                >
                    <h3
                        style={{
                            fontSize: 14,
                            fontWeight: 800,
                            color: '#1a2e23',
                            margin: 0,
                        }}
                    >
                        O que você recebe
                    </h3>
                </div>
                {[
                    {
                        icon: 'package',
                        label: '1 token = 250g blend especial',
                        color: GREEN,
                    },
                    { icon: 'gift', label: '+50 TILs por token comprado', color: PURPLE },
                    {
                        icon: 'star',
                        label: 'Acesso antecipado ao próximo lote',
                        color: GOLD,
                    },
                    {
                        icon: 'leaf',
                        label: 'Impacto direto na economia local',
                        color: GREEN_DARK,
                    },
                ].map((b) => (
                    <div
                        key={b.label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '12px 16px',
                            borderBottom: '1px solid #f0fdf4',
                        }}
                    >
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                background: `${b.color}22`,
                                borderRadius: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Icon name={b.icon} size={16} color={b.color} />
                        </div>
                        <span style={{ fontSize: 13, color: '#2d4a38', fontWeight: 600 }}>
                            {b.label}
                        </span>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    marginBottom: 16,
                }}
            >
                <div
                    style={{
                        background: '#fff',
                        borderRadius: 14,
                        border: '2px solid #d5f5e3',
                        padding: '12px 18px',
                        fontWeight: 900,
                        fontSize: 20,
                        color: '#1a2e23',
                    }}
                >
                    −
                </div>
                <div
                    style={{
                        flex: 1,
                        background: '#f7fdf9',
                        borderRadius: 14,
                        border: '2px solid #d5f5e3',
                        padding: '12px',
                        textAlign: 'center',
                    }}
                >
                    <span style={{ fontSize: 20, fontWeight: 900, color: '#1a2e23' }}>
                        1 token
                    </span>
                    <p style={{ margin: '2px 0 0', fontSize: 12, color: '#6b8f75' }}>
                        = R$ 25,00 · 50 TILs
                    </p>
                </div>
                <div
                    style={{
                        background: '#fff',
                        borderRadius: 14,
                        border: '2px solid #d5f5e3',
                        padding: '12px 18px',
                        fontWeight: 900,
                        fontSize: 20,
                        color: '#1a2e23',
                    }}
                >
                    +
                </div>
            </div>

            <button
                onClick={() => navigate('cons_success')}
                style={{
                    width: '100%',
                    padding: 18,
                    borderRadius: 16,
                    border: 'none',
                    background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 17,
                    cursor: 'pointer',
                    boxShadow: '0 8px 28px rgba(39,174,96,0.4)',
                    letterSpacing: 0.2,
                }}
            >
                🌱 Apoiar por R$ 25,00
            </button>
        </div>
    </div>
);

const ConsRedeem = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <SectionHeader
            title="Resgatar TILs"
            subtitle="Use seus tokens nos parceiros"
            back="Início"
            onBack={() => navigate('cons_home')}
        />
        <div
            style={{
                padding: '0 24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
            }}
        >
            <div
                style={{
                    background: `linear-gradient(135deg, ${PURPLE}, #6c3483)`,
                    borderRadius: 20,
                    padding: 20,
                    color: '#fff',
                }}
            >
                <p style={{ margin: 0, opacity: 0.8, fontSize: 13 }}>
                    Seus TILs disponíveis
                </p>
                <p
                    style={{
                        margin: '4px 0 0',
                        fontSize: 40,
                        fontWeight: 900,
                        letterSpacing: -1,
                    }}
                >
                    485
                </p>
                <p style={{ margin: '4px 0 0', opacity: 0.7, fontSize: 13 }}>
                    ≈ R$ 48,50 em recompensas
                </p>
            </div>

            <h3
                style={{ fontSize: 15, fontWeight: 800, color: '#1a2e23', margin: 0 }}
            >
                Parceiros disponíveis
            </h3>
            {[
                {
                    name: 'Café da Selva',
                    cat: '☕',
                    offer: '100 TILs → 10% desconto',
                    available: true,
                },
                {
                    name: 'Padaria Boa Terra',
                    cat: '🍞',
                    offer: '50 TILs → pão artesanal',
                    available: true,
                },
                {
                    name: 'Ateliê Cores Vivas',
                    cat: '🎨',
                    offer: '200 TILs → peça de cerâmica',
                    available: false,
                },
                {
                    name: 'Horta do Pedro',
                    cat: '🌾',
                    offer: '80 TILs → cesta de folhas',
                    available: true,
                },
            ].map((p) => (
                <div
                    key={p.name}
                    style={{
                        background: '#fff',
                        borderRadius: 16,
                        padding: 16,
                        border: '1px solid #e8f5e9',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        opacity: p.available ? 1 : 0.5,
                    }}
                >
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            background: GREEN_BG,
                            borderRadius: 14,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 24,
                            flexShrink: 0,
                        }}
                    >
                        {p.cat}
                    </div>
                    <div style={{ flex: 1 }}>
                        <p
                            style={{
                                fontWeight: 800,
                                fontSize: 14,
                                color: '#1a2e23',
                                margin: 0,
                            }}
                        >
                            {p.name}
                        </p>
                        <p
                            style={{
                                fontSize: 12,
                                color: PURPLE,
                                fontWeight: 600,
                                margin: '3px 0 0',
                            }}
                        >
                            {p.offer}
                        </p>
                    </div>
                    <button
                        style={{
                            padding: '8px 14px',
                            borderRadius: 10,
                            border: `2px solid ${p.available ? GREEN : '#ddd'}`,
                            background: p.available ? GREEN_BG : '#f5f5f5',
                            color: p.available ? GREEN_DARK : '#aaa',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: p.available ? 'pointer' : 'default',
                        }}
                    >
                        {p.available ? 'Resgatar' : 'Indisponível'}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const ConsSuccess = ({ navigate }) => (
    <div
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            textAlign: 'center',
        }}
    >
        <div
            style={{
                width: 100,
                height: 100,
                background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 12px 40px rgba(39,174,96,0.4)',
            }}
        >
            <span style={{ fontSize: 48 }}>🌱</span>
        </div>
        <h2
            style={{
                fontSize: 26,
                fontWeight: 900,
                color: '#1a2e23',
                margin: '0 0 12px',
                letterSpacing: -0.5,
            }}
        >
            Você apoiou!
        </h2>
        <p
            style={{
                fontSize: 15,
                color: '#6b8f75',
                lineHeight: 1.6,
                margin: '0 0 24px',
            }}
        >
            Seu token do <strong>Blend Especial Jun/26</strong> foi adquirido com
            sucesso. Você acabou de fortalecer a economia local! 💚
        </p>
        <div
            style={{
                background: `linear-gradient(135deg, ${PURPLE}15, ${PURPLE}30)`,
                borderRadius: 16,
                padding: 20,
                width: '100%',
                marginBottom: 16,
                border: `1px solid ${PURPLE}40`,
            }}
        >
            <p style={{ fontSize: 28, fontWeight: 900, color: PURPLE, margin: 0 }}>
                +50 TILs
            </p>
            <p
                style={{ fontSize: 13, color: PURPLE, margin: '4px 0 0', opacity: 0.8 }}
            >
                Tokens de Impacto Local adicionados
            </p>
        </div>
        <div
            style={{
                background: GREEN_BG,
                borderRadius: 14,
                padding: 16,
                width: '100%',
                marginBottom: 24,
                border: '1px solid #d5f5e3',
            }}
        >
            <p
                style={{ fontSize: 13, color: GREEN_DARK, fontWeight: 600, margin: 0 }}
            >
                Saldo atual: <strong>535 TILs</strong> — use em qualquer parceiro do
                ecossistema!
            </p>
        </div>
        <button
            onClick={() => navigate('cons_home')}
            style={{
                width: '100%',
                padding: 16,
                borderRadius: 14,
                border: 'none',
                background: `linear-gradient(135deg, ${GREEN_LIGHT}, ${GREEN})`,
                color: '#fff',
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(39,174,96,0.35)',
            }}
        >
            Explorar mais campanhas
        </button>
    </div>
);

// ══════════════════════════════════════════════════════════════════════════
// INVESTIDOR SCREENS
// ══════════════════════════════════════════════════════════════════════════

const InvHome = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <div
            style={{
                background:
                    'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 60%, #2980b9 100%)',
                padding: '24px 24px 36px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 20,
                }}
            >
                <div>
                    <p
                        style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, margin: 0 }}
                    >
                        Seu portfólio 📊
                    </p>
                    <h2
                        style={{
                            color: '#fff',
                            fontSize: 22,
                            fontWeight: 900,
                            margin: '4px 0 0',
                            letterSpacing: -0.5,
                        }}
                    >
                        Rafael Mendes
                    </h2>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                    <button
                        style={{
                            background: 'rgba(255,255,255,0.12)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: 12,
                            padding: 10,
                            cursor: 'pointer',
                        }}
                    >
                        <Icon name="bell" size={18} color="#fff" />
                    </button>
                </div>
            </div>

            <div
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 20,
                    padding: '20px 20px',
                    border: '1px solid rgba(255,255,255,0.15)',
                }}
            >
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, margin: 0 }}>
                    Valor total investido
                </p>
                <p
                    style={{
                        color: '#fff',
                        fontSize: 36,
                        fontWeight: 900,
                        margin: '4px 0 0',
                        letterSpacing: -1,
                    }}
                >
                    R$ 1.240<span style={{ fontSize: 18, fontWeight: 600 }}>,00</span>
                </p>
                <div
                    style={{
                        display: 'flex',
                        gap: 6,
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <span
                        style={{
                            background: '#27ae6033',
                            color: '#2ecc71',
                            fontSize: 12,
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: 100,
                        }}
                    >
                        ▲ +8,2% retorno estimado
                    </span>
                </div>
                <div
                    style={{
                        height: 1,
                        background: 'rgba(255,255,255,0.15)',
                        margin: '16px 0',
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: 11,
                                margin: 0,
                            }}
                        >
                            Projetos ativos
                        </p>
                        <p
                            style={{
                                color: '#fff',
                                fontWeight: 900,
                                fontSize: 18,
                                margin: '2px 0 0',
                            }}
                        >
                            4
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: 11,
                                margin: 0,
                            }}
                        >
                            TILs acumulados
                        </p>
                        <p
                            style={{
                                color: GREEN_LIGHT,
                                fontWeight: 900,
                                fontSize: 18,
                                margin: '2px 0 0',
                            }}
                        >
                            1.240
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: 11,
                                margin: 0,
                            }}
                        >
                            Neg. apoiados
                        </p>
                        <p
                            style={{
                                color: '#fff',
                                fontWeight: 900,
                                fontSize: 18,
                                margin: '2px 0 0',
                            }}
                        >
                            3
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div
            style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}
        >
            <button
                onClick={() => navigate('inv_explore')}
                style={{
                    background: 'linear-gradient(135deg, #1a3a5c, #2980b9)',
                    border: 'none',
                    borderRadius: 16,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    cursor: 'pointer',
                }}
            >
                <div
                    style={{
                        width: 44,
                        height: 44,
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon name="search" size={22} color="#fff" />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <p
                        style={{ color: '#fff', fontWeight: 800, fontSize: 15, margin: 0 }}
                    >
                        Explorar oportunidades
                    </p>
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: 12,
                            margin: '2px 0 0',
                        }}
                    >
                        Novos projetos para apoiar
                    </p>
                </div>
                <Icon
                    name="arrow_right"
                    size={20}
                    color="rgba(255,255,255,0.7)"
                    style={{ marginLeft: 'auto' }}
                />
            </button>

            <div>
                <h3
                    style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: '#1a2e23',
                        margin: '0 0 14px',
                    }}
                >
                    Meus investimentos
                </h3>
                {[
                    {
                        biz: 'Café da Selva',
                        name: 'Blend Especial Jun/26',
                        invested: 250,
                        tokens: 10,
                        status: 'Ativo',
                        return: '+5%',
                        cat: '☕',
                        statusColor: GREEN,
                    },
                    {
                        biz: 'Ateliê Cores Vivas',
                        name: 'Coleção Cerâmica',
                        invested: 450,
                        tokens: 10,
                        status: 'Produção',
                        return: '+12%',
                        cat: '🎨',
                        statusColor: GOLD,
                    },
                    {
                        biz: 'Horta do Pedro',
                        name: 'Cesta Orgânica',
                        invested: 90,
                        tokens: 5,
                        status: 'Entregue',
                        return: '+8%',
                        cat: '🌾',
                        statusColor: '#3498db',
                    },
                ].map((inv) => (
                    <div
                        key={inv.name}
                        onClick={() => navigate('inv_detail')}
                        style={{
                            background: '#fff',
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 12,
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            border: '1px solid #e8f5e9',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    background: GREEN_BG,
                                    borderRadius: 14,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 24,
                                    flexShrink: 0,
                                }}
                            >
                                {inv.cat}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: 11, color: '#6b8f75', margin: 0 }}>
                                    {inv.biz}
                                </p>
                                <p
                                    style={{
                                        fontWeight: 800,
                                        fontSize: 14,
                                        color: '#1a2e23',
                                        margin: '2px 0 0',
                                    }}
                                >
                                    {inv.name}
                                </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p
                                    style={{
                                        fontWeight: 900,
                                        fontSize: 15,
                                        color: '#1a2e23',
                                        margin: 0,
                                    }}
                                >
                                    R$ {inv.invested}
                                </p>
                                <span
                                    style={{
                                        background: `${inv.statusColor}22`,
                                        color: inv.statusColor,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        padding: '2px 8px',
                                        borderRadius: 100,
                                    }}
                                >
                                    {inv.status}
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 10,
                                paddingTop: 10,
                                borderTop: '1px solid #f0fdf4',
                            }}
                        >
                            <span style={{ fontSize: 12, color: '#6b8f75' }}>
                                {inv.tokens} tokens · Retorno est.
                            </span>
                            <span style={{ fontSize: 12, fontWeight: 800, color: GREEN }}>
                                {inv.return}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const InvExplore = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <SectionHeader
            title="Oportunidades"
            subtitle="Invista em negócios locais"
            back="Início"
            onBack={() => navigate('inv_home')}
        />
        <div
            style={{
                padding: '0 24px 8px',
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
            }}
        >
            {['🔥 Alta demanda', '🌱 Novos', '⭐ Top avaliados', '🏪 Próximos'].map(
                (f, i) => (
                    <button
                        key={f}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 100,
                            border: `2px solid ${i === 0 ? '#2980b9' : '#d5f5e3'}`,
                            background: i === 0 ? '#ebf5fb' : '#fff',
                            color: i === 0 ? '#2980b9' : '#6b8f75',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {f}
                    </button>
                )
            )}
        </div>
        <div
            style={{
                padding: '16px 24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
            }}
        >
            {[
                {
                    biz: 'Cervejaria Alquimia',
                    name: 'Lote Artesanal IPA Jul/26',
                    goal: 5000,
                    raised: 3750,
                    tokens: 50,
                    price: 100,
                    til: 200,
                    risk: 'Baixo',
                    return: '8-12%',
                    cat: '🍺',
                    investors: 21,
                },
                {
                    biz: 'Ateliê Cores Vivas',
                    name: 'Coleção Cerâmica Artesanal',
                    goal: 2200,
                    raised: 880,
                    tokens: 20,
                    price: 110,
                    til: 220,
                    risk: 'Baixo',
                    return: '10-15%',
                    cat: '🎨',
                    investors: 9,
                },
                {
                    biz: 'Studio Move',
                    name: 'Pacote Aulas Dança 2026',
                    goal: 1500,
                    raised: 600,
                    tokens: 30,
                    price: 50,
                    til: 100,
                    risk: 'Baixo',
                    return: '6-9%',
                    cat: '💃',
                    investors: 14,
                },
            ].map((op) => (
                <div
                    key={op.name}
                    onClick={() => navigate('inv_detail')}
                    style={{
                        background: '#fff',
                        borderRadius: 18,
                        overflow: 'hidden',
                        boxShadow: '0 3px 16px rgba(0,0,0,0.07)',
                        cursor: 'pointer',
                        border: '1px solid #e8f5e9',
                    }}
                >
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #1a3a5c22, #2980b922)',
                            height: 70,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 20px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span style={{ fontSize: 36 }}>{op.cat}</span>
                        <div style={{ textAlign: 'right' }}>
                            <span
                                style={{
                                    background: '#ebf5fb',
                                    color: '#2980b9',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    padding: '4px 12px',
                                    borderRadius: 100,
                                }}
                            >
                                Retorno est. {op.return}
                            </span>
                            <p
                                style={{
                                    fontSize: 11,
                                    color: '#2980b9',
                                    margin: '4px 0 0',
                                    fontWeight: 600,
                                }}
                            >
                                Risco: {op.risk}
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: '14px 16px 16px' }}>
                        <p style={{ fontSize: 11, color: '#6b8f75', margin: 0 }}>
                            {op.biz}
                        </p>
                        <p
                            style={{
                                fontSize: 15,
                                fontWeight: 800,
                                color: '#1a2e23',
                                margin: '4px 0 10px',
                            }}
                        >
                            {op.name}
                        </p>
                        <div
                            style={{
                                background: '#e8f5e9',
                                borderRadius: 100,
                                height: 6,
                                marginBottom: 10,
                            }}
                        >
                            <div
                                style={{
                                    width: `${Math.round((op.raised / op.goal) * 100)}%`,
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #2ecc71, #27ae60)',
                                    borderRadius: 100,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <div>
                                <span
                                    style={{ fontSize: 16, fontWeight: 900, color: '#1a2e23' }}
                                >
                                    R$ {op.price}
                                </span>
                                <span
                                    style={{
                                        fontSize: 11,
                                        color: PURPLE,
                                        fontWeight: 700,
                                        marginLeft: 8,
                                    }}
                                >
                                    +{op.til} TILs
                                </span>
                            </div>
                            <span style={{ fontSize: 12, color: '#6b8f75' }}>
                                👥 {op.investors} investidores
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const InvDetail = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)',
                    height: 180,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span style={{ fontSize: 70 }}>🍺</span>
            </div>
            <button
                onClick={() => navigate('inv_explore')}
                style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    borderRadius: 10,
                    padding: 8,
                    cursor: 'pointer',
                }}
            >
                <Icon name="arrow_left" size={20} color="#fff" />
            </button>
        </div>
        <div style={{ padding: '20px 24px 32px' }}>
            <span
                style={{
                    background: '#ebf5fb',
                    color: '#2980b9',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 100,
                }}
            >
                🍺 Cerveja Artesanal
            </span>
            <h2
                style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: '#1a2e23',
                    margin: '10px 0 4px',
                    letterSpacing: -0.5,
                }}
            >
                Lote Artesanal IPA Jul/26
            </h2>
            <p style={{ fontSize: 13, color: '#6b8f75', margin: '0 0 16px' }}>
                📍 Cervejaria Alquimia · Pinheiros
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                    marginBottom: 16,
                }}
            >
                {[
                    {
                        label: 'Retorno estimado',
                        value: '8–12%',
                        icon: 'trending',
                        color: GREEN,
                    },
                    { label: 'Risco', value: 'Baixo', icon: 'shield', color: GREEN_DARK },
                    { label: 'Prazo', value: '4 meses', icon: 'clock', color: '#2980b9' },
                    {
                        label: 'TILs por token',
                        value: '+200 TILs',
                        icon: 'gift',
                        color: PURPLE,
                    },
                ].map((m) => (
                    <div
                        key={m.label}
                        style={{
                            background: '#fff',
                            borderRadius: 14,
                            padding: '14px 14px',
                            border: '1px solid #e8f5e9',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                        }}
                    >
                        <Icon name={m.icon} size={18} color={m.color} />
                        <p style={{ margin: 0, fontSize: 11, color: '#6b8f75' }}>
                            {m.label}
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: 15,
                                fontWeight: 900,
                                color: '#1a2e23',
                            }}
                        >
                            {m.value}
                        </p>
                    </div>
                ))}
            </div>

            <div
                style={{
                    background: '#f7fdf9',
                    borderRadius: 16,
                    padding: 16,
                    marginBottom: 16,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 8,
                    }}
                >
                    <span style={{ fontSize: 13, color: '#6b8f75' }}>
                        Captado · 75% de R$ 5.000
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: GREEN }}>
                        R$ 3.750
                    </span>
                </div>
                <div style={{ background: '#d5f5e3', borderRadius: 100, height: 10 }}>
                    <div
                        style={{
                            width: '75%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #2ecc71, #27ae60)',
                            borderRadius: 100,
                        }}
                    />
                </div>
                <p style={{ fontSize: 12, color: '#6b8f75', marginTop: 8 }}>
                    👥 21 investidores · ⏳ 18 dias restantes
                </p>
            </div>

            <p
                style={{
                    fontSize: 14,
                    color: '#2d4a38',
                    lineHeight: 1.7,
                    margin: '0 0 20px',
                }}
            >
                A Cervejaria Alquimia está captando para produzir o{' '}
                <strong>Lote de IPA Artesanal de julho</strong>. Investidores recebem o
                valor investido acrescido de retorno em produtos ou crédito na
                plataforma, além de TILs bônus.
            </p>

            <div
                style={{
                    background: '#fff3cd',
                    borderRadius: 14,
                    padding: 14,
                    border: '1px solid #ffc107',
                    display: 'flex',
                    gap: 10,
                    marginBottom: 20,
                }}
            >
                <Icon name="award" size={18} color={GOLD} />
                <p
                    style={{ fontSize: 12, color: '#856404', margin: 0, fontWeight: 600 }}
                >
                    Projetos curados passam por análise de{' '}
                    <strong>viabilidade e conformidade regulatória</strong> antes de serem
                    publicados.
                </p>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
                <button
                    style={{
                        flex: 1,
                        padding: 16,
                        borderRadius: 14,
                        border: `2px solid #2980b9`,
                        background: '#ebf5fb',
                        color: '#2980b9',
                        fontWeight: 800,
                        fontSize: 14,
                        cursor: 'pointer',
                    }}
                >
                    <Icon name="eye" size={16} color="#2980b9" /> Ver mais
                </button>
                <button
                    onClick={() => navigate('inv_invest')}
                    style={{
                        flex: 2,
                        padding: 16,
                        borderRadius: 14,
                        border: 'none',
                        background: 'linear-gradient(135deg, #2980b9, #1a3a5c)',
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: 15,
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(41,128,185,0.35)',
                    }}
                >
                    📈 Investir agora
                </button>
            </div>
        </div>
    </div>
);

const InvInvest = ({ navigate }) => (
    <div style={{ flex: 1, overflowY: 'auto' }}>
        <SectionHeader
            title="Confirmar investimento"
            subtitle="Cervejaria Alquimia · IPA Jul/26"
            back="Detalhe"
            onBack={() => navigate('inv_detail')}
        />
        <div
            style={{
                padding: '0 24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
            }}
        >
            <div>
                <label
                    style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: '#1a2e23',
                        display: 'block',
                        marginBottom: 8,
                    }}
                >
                    Quantidade de tokens
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                    {[1, 2, 3, 5, 10].map((n) => (
                        <button
                            key={n}
                            style={{
                                flex: 1,
                                padding: '12px 0',
                                borderRadius: 12,
                                border: `2px solid ${n === 2 ? '#2980b9' : '#d5f5e3'}`,
                                background: n === 2 ? '#ebf5fb' : '#fff',
                                color: n === 2 ? '#2980b9' : '#6b8f75',
                                fontWeight: 700,
                                fontSize: 14,
                                cursor: 'pointer',
                            }}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>

            <div
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    border: '1px solid #e8f5e9',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        padding: '12px 16px',
                        background: '#f7fdf9',
                        borderBottom: '1px solid #e8f5e9',
                    }}
                >
                    <h3
                        style={{
                            fontSize: 14,
                            fontWeight: 800,
                            color: '#1a2e23',
                            margin: 0,
                        }}
                    >
                        Resumo
                    </h3>
                </div>
                {[
                    { label: '2 tokens × R$ 100,00', value: 'R$ 200,00' },
                    { label: 'TILs a receber', value: '+400 TILs' },
                    { label: 'Retorno estimado', value: 'R$ 216–224' },
                    { label: 'Prazo de retorno', value: 'até 31/jul/2026' },
                ].map((r) => (
                    <div
                        key={r.label}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '13px 16px',
                            borderBottom: '1px solid #f0fdf4',
                        }}
                    >
                        <span style={{ fontSize: 13, color: '#6b8f75' }}>{r.label}</span>
                        <span
                            style={{
                                fontSize: 13,
                                fontWeight: 800,
                                color: r.label.includes('TILs') ? PURPLE : '#1a2e23',
                            }}
                        >
                            {r.value}
                        </span>
                    </div>
                ))}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '15px 16px',
                        background: '#f7fdf9',
                    }}
                >
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#1a2e23' }}>
                        Total a investir
                    </span>
                    <span style={{ fontSize: 18, fontWeight: 900, color: '#2980b9' }}>
                        R$ 200,00
                    </span>
                </div>
            </div>

            <div
                style={{
                    background: GREEN_BG,
                    borderRadius: 14,
                    padding: 14,
                    border: '1px solid #d5f5e3',
                    display: 'flex',
                    gap: 10,
                }}
            >
                <Icon name="leaf" size={18} color={GREEN} />
                <p
                    style={{
                        fontSize: 12,
                        color: GREEN_DARK,
                        fontWeight: 600,
                        margin: 0,
                    }}
                >
                    Seu investimento fortalece diretamente a{' '}
                    <strong>economia local</strong> e apoia um empreendedor real da sua
                    comunidade.
                </p>
            </div>

            <button
                onClick={() => navigate('inv_success')}
                style={{
                    width: '100%',
                    padding: 18,
                    borderRadius: 16,
                    border: 'none',
                    background: 'linear-gradient(135deg, #3498db, #1a3a5c)',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 17,
                    cursor: 'pointer',
                    boxShadow: '0 8px 28px rgba(41,128,185,0.35)',
                }}
            >
                📈 Confirmar R$ 200,00
            </button>
            <p
                style={{
                    fontSize: 11,
                    color: '#aab9b0',
                    textAlign: 'center',
                    margin: 0,
                }}
            >
                Seus dados são protegidos. Operação segura via blockchain.
            </p>
        </div>
    </div>
);

const InvSuccess = ({ navigate }) => (
    <div
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            textAlign: 'center',
        }}
    >
        <div
            style={{
                width: 100,
                height: 100,
                background: 'linear-gradient(135deg, #3498db, #1a3a5c)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 12px 40px rgba(41,128,185,0.4)',
            }}
        >
            <span style={{ fontSize: 48 }}>🏆</span>
        </div>
        <h2
            style={{
                fontSize: 26,
                fontWeight: 900,
                color: '#1a2e23',
                margin: '0 0 12px',
                letterSpacing: -0.5,
            }}
        >
            Investimento confirmado!
        </h2>
        <p
            style={{
                fontSize: 15,
                color: '#6b8f75',
                lineHeight: 1.6,
                margin: '0 0 24px',
            }}
        >
            Você investiu <strong>R$ 200,00</strong> no{' '}
            <strong>Lote IPA Jul/26</strong> da Cervejaria Alquimia. Seu investimento
            está gerando impacto real!
        </p>
        <div
            style={{
                background: `linear-gradient(135deg, ${PURPLE}15, ${PURPLE}30)`,
                borderRadius: 16,
                padding: 20,
                width: '100%',
                marginBottom: 16,
                border: `1px solid ${PURPLE}40`,
            }}
        >
            <p style={{ fontSize: 28, fontWeight: 900, color: PURPLE, margin: 0 }}>
                +400 TILs
            </p>
            <p
                style={{ fontSize: 13, color: PURPLE, margin: '4px 0 0', opacity: 0.8 }}
            >
                Tokens de Impacto Local adicionados ao saldo
            </p>
        </div>
        <div
            style={{
                background: '#ebf5fb',
                borderRadius: 14,
                padding: 16,
                width: '100%',
                marginBottom: 24,
                border: '1px solid #aed6f1',
            }}
        >
            <p style={{ fontSize: 13, color: '#2980b9', fontWeight: 600, margin: 0 }}>
                Portfólio atualizado: <strong>R$ 1.440,00</strong> investidos em 4
                negócios locais
            </p>
        </div>
        <button
            onClick={() => navigate('inv_home')}
            style={{
                width: '100%',
                padding: 16,
                borderRadius: 14,
                border: 'none',
                background: 'linear-gradient(135deg, #3498db, #1a3a5c)',
                color: '#fff',
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(41,128,185,0.35)',
            }}
        >
            Ver meu portfólio
        </button>
    </div>
);

// ══════════════════════════════════════════════════════════════════════════
// PROFILE SELECTOR (ONBOARDING)
// ══════════════════════════════════════════════════════════════════════════

const ProfileSelect = ({ onSelect }) => (
    <div
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: '#f0fdf4',
        }}
    >
        <div
            style={{
                background: `linear-gradient(160deg, ${GREEN_DARK} 0%, ${GREEN} 100%)`,
                padding: '36px 28px 40px',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    width: 64,
                    height: 64,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: 34,
                }}
            >
                🌾
            </div>
            <h1
                style={{
                    color: '#fff',
                    fontSize: 28,
                    fontWeight: 900,
                    margin: '0 0 8px',
                    letterSpacing: -0.5,
                }}
            >
                Colheita Digital
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, margin: 0 }}>
                Tokenize-se: O Valor Além da Moeda
            </p>
        </div>
        <div style={{ flex: 1, padding: '28px 24px 32px' }}>
            <p
                style={{
                    fontSize: 14,
                    color: '#6b8f75',
                    textAlign: 'center',
                    margin: '0 0 20px',
                    fontWeight: 600,
                }}
            >
                Como você quer usar a plataforma?
            </p>
            {[
                {
                    key: 'emp',
                    emoji: '🏪',
                    title: 'Empreendedor local',
                    desc: 'Crie campanhas, tokenize ativos e fideliza seus clientes',
                    color: GREEN,
                    bg: GREEN_BG,
                },
                {
                    key: 'cons',
                    emoji: '🛍️',
                    title: 'Consumidor',
                    desc: 'Apoie negócios do bairro e acumule tokens de benefícios',
                    color: '#1a7a42',
                    bg: '#d5f5e3',
                },
                {
                    key: 'inv',
                    emoji: '📈',
                    title: 'Investidor de impacto',
                    desc: 'Invista em produção local e obtenha retorno financeiro',
                    color: '#2980b9',
                    bg: '#ebf5fb',
                },
            ].map((p) => (
                <button
                    key={p.key}
                    onClick={() => onSelect(p.key)}
                    style={{
                        width: '100%',
                        background: '#fff',
                        border: `2px solid ${p.bg}`,
                        borderRadius: 18,
                        padding: '16px 18px',
                        marginBottom: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        cursor: 'pointer',
                        boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
                        transition: 'transform 0.15s',
                    }}
                >
                    <div
                        style={{
                            width: 52,
                            height: 52,
                            background: p.bg,
                            borderRadius: 14,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 26,
                            flexShrink: 0,
                        }}
                    >
                        {p.emoji}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p
                            style={{
                                fontWeight: 800,
                                fontSize: 15,
                                color: '#1a2e23',
                                margin: 0,
                            }}
                        >
                            {p.title}
                        </p>
                        <p
                            style={{
                                fontSize: 12,
                                color: '#6b8f75',
                                margin: '4px 0 0',
                                lineHeight: 1.4,
                            }}
                        >
                            {p.desc}
                        </p>
                    </div>
                    <Icon
                        name="arrow_right"
                        size={18}
                        color="#aab9b0"
                        style={{ marginLeft: 'auto', flexShrink: 0 }}
                    />
                </button>
            ))}
        </div>
    </div>
);

// ══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════════════════

const empNav = [
    { key: 'emp_home', icon: 'home', label: 'Início' },
    { key: 'emp_campaign', icon: 'plus', label: 'Campanha' },
    { key: 'emp_fidelity', icon: 'gift', label: 'Fidelidade' },
    { key: 'emp_profile', icon: 'user', label: 'Perfil' },
];
const consNav = [
    { key: 'cons_home', icon: 'home', label: 'Início' },
    { key: 'cons_redeem', icon: 'gift', label: 'Resgatar' },
    { key: 'cons_profile', icon: 'user', label: 'Perfil' },
];
const invNav = [
    { key: 'inv_home', icon: 'home', label: 'Início' },
    { key: 'inv_explore', icon: 'search', label: 'Explorar' },
    { key: 'inv_profile', icon: 'user', label: 'Perfil' },
];

const PROFILE_LABELS = {
    emp: { label: 'Empreendedor', color: GREEN, emoji: '🏪' },
    cons: { label: 'Consumidor', color: GREEN_DARK, emoji: '🛍️' },
    inv: { label: 'Investidor', color: '#2980b9', emoji: '📈' },
};

export default function App() {
    const [profile, setProfile] = useState<string | null>(null); // emp | cons | inv
    const [screen, setScreen] = useState<string | null>(null);

    const handleProfileSelect = (p) => {
        setProfile(p);
        setScreen(
            p === 'emp' ? 'emp_home' : p === 'cons' ? 'cons_home' : 'inv_home'
        );
    };

    const navigate = (s) => setScreen(s);
    const activeNav =
        profile === 'emp' ? empNav : profile === 'cons' ? consNav : invNav;

    const renderScreen = () => {
        if (!profile) return <ProfileSelect onSelect={handleProfileSelect} />;
        const screens = {
            emp_home: <EmpHome navigate={navigate} />,
            emp_campaign: <EmpCampaign navigate={navigate} />,
            emp_success: <EmpSuccess navigate={navigate} />,
            emp_fidelity: <EmpFidelity navigate={navigate} />,
            emp_campaign_detail: <EmpFidelity navigate={navigate} />,
            cons_home: <ConsHome navigate={navigate} />,
            cons_campaign: <ConsCampaign navigate={navigate} />,
            cons_redeem: <ConsRedeem navigate={navigate} />,
            cons_success: <ConsSuccess navigate={navigate} />,
            inv_home: <InvHome navigate={navigate} />,
            inv_explore: <InvExplore navigate={navigate} />,
            inv_detail: <InvDetail navigate={navigate} />,
            inv_invest: <InvInvest navigate={navigate} />,
            inv_success: <InvSuccess navigate={navigate} />,
        };
        return screens[screen || `${profile}_home`] || screens[`${profile}_home`];
    };

    const showNav =
        profile && !['emp_success', 'cons_success', 'inv_success'].includes(screen || `${profile}_home`);

    return (
        <div
            style={{
                minHeight: '100vh',
                background: '#1a2e23',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '32px 16px 48px',
                fontFamily: "'Nunito', sans-serif",
                width: '100%',
                overflowX: 'hidden',
                boxSizing: 'border-box'
            }}
        >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 32, color: '#fff' }}>
                <h1
                    style={{
                        fontSize: 28,
                        fontWeight: 900,
                        margin: '0 0 6px',
                        letterSpacing: -0.5,
                    }}
                >
                    🌾 Colheita Digital
                </h1>
                <p style={{ fontSize: 14, opacity: 0.65, margin: 0 }}>
                    Protótipo Mobile — TCC FIAP 2026
                </p>
            </div>

            {/* Profile tabs */}
            {profile && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
                    {Object.entries(PROFILE_LABELS).map(([key, val]) => (
                        <button
                            key={key}
                            onClick={() => handleProfileSelect(key)}
                            style={{
                                padding: '8px 18px',
                                borderRadius: 100,
                                border: `2px solid ${profile === key ? val.color : 'rgba(255,255,255,0.2)'
                                    }`,
                                background:
                                    profile === key ? val.color : 'rgba(255,255,255,0.08)',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: 13,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                        >
                            {val.emoji} {val.label}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setProfile(null);
                            setScreen(null);
                        }}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 100,
                            border: '2px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.6)',
                            fontWeight: 700,
                            fontSize: 13,
                            cursor: 'pointer',
                        }}
                    >
                        ↩ Trocar
                    </button>
                </div>
            )}

            {/* Phone */}
            <PhoneFrame>
                {renderScreen()}
                {showNav && (
                    <BottomNav items={activeNav} active={screen} onSelect={navigate} />
                )}
            </PhoneFrame>

            {/* Flow guide */}
            {profile && (
                <div
                    style={{
                        marginTop: 24,
                        maxWidth: 375,
                        width: '100%',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 16,
                        padding: '16px 20px',
                        border: '1px solid rgba(255,255,255,0.12)',
                    }}
                >
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: 12,
                            margin: '0 0 8px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                        }}
                    >
                        {PROFILE_LABELS[profile].emoji} Fluxo —{' '}
                        {PROFILE_LABELS[profile].label}
                    </p>
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.55)',
                            fontSize: 12,
                            margin: 0,
                            lineHeight: 1.6,
                        }}
                    >
                        {profile === 'emp' &&
                            'Início → Criar campanha (3 etapas) → Publicação → Acompanhar TILs do programa de fidelidade'}
                        {profile === 'cons' &&
                            'Início → Explorar campanhas → Detalhes → Apoiar com token → Resgatar TILs nos parceiros'}
                        {profile === 'inv' &&
                            'Início → Explorar oportunidades → Analisar detalhe → Confirmar investimento → Acompanhar portfólio'}
                    </p>
                </div>
            )}
        </div>
    );
}
