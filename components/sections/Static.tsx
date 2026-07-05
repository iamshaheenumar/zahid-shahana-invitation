import RevealSection from "@/components/RevealSection";

const goldText = {
  background: "linear-gradient(135deg,#f4e3ad,#c9a24b,#a8842f)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

const eyebrow = {
  fontFamily: "var(--font-eb-garamond)",
  fontSize: 13,
  letterSpacing: 5,
  textTransform: "uppercase",
  color: "#c9a24b",
  margin: "0 0 14px",
} as const;

const heading = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 600,
  fontSize: "clamp(32px,6vw,52px)",
  margin: "0 0 50px",
  color: "#e9e1cf",
} as const;

const labelCaps = {
  fontSize: 12,
  letterSpacing: 3,
  textTransform: "uppercase",
  color: "#8f876f",
} as const;

export function DateBlock() {
  return (
    <RevealSection style={{ padding: "60px 24px 96px", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <p
          dir="rtl"
          style={{
            fontFamily: "var(--font-amiri)",
            fontSize: 18,
            color: "#a89263",
            margin: "0 0 22px",
          }}
        >
          وَلِيمَة
        </p>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: 13,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#bdb39c",
            margin: "0 0 24px",
          }}
        >
          Together with their families request the honour of your presence
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            fontFamily: "var(--font-cormorant)",
          }}
        >
          <span style={{ fontSize: "clamp(28px,6vw,46px)", color: "#e9e1cf" }}>
            12
          </span>
          <span
            style={{ width: 1, height: 46, background: "rgba(201,162,75,0.5)" }}
          />
          <span
            style={{
              fontSize: "clamp(28px,6vw,46px)",
              letterSpacing: "0.12em",
              ...goldText,
            }}
          >
            AUGUST
          </span>
          <span
            style={{ width: 1, height: 46, background: "rgba(201,162,75,0.5)" }}
          />
          <span style={{ fontSize: "clamp(28px,6vw,46px)", color: "#e9e1cf" }}>
            2026
          </span>
        </div>
        <p
          style={{
            margin: "18px 0 0",
            fontSize: 16,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#a89263",
          }}
        >
          Wednesday · 6:00 – 9:00 PM
        </p>
      </div>
    </RevealSection>
  );
}

function FamilyCard({
  title,
  relation,
  parent1,
  parent2,
  residence,
}: {
  title: string;
  relation: string;
  parent1: string;
  parent2: string;
  residence: string;
}) {
  return (
    <div
      style={{
        flex: "1 1 300px",
        maxWidth: 420,
        padding: "48px 32px 40px",
        border: "1px solid rgba(201,162,75,0.28)",
        borderRadius: "160px 160px 18px 18px",
        background:
          "linear-gradient(180deg, rgba(201,162,75,0.06), rgba(255,255,255,0.012))",
      }}
    >
      <span
        dir="rtl"
        style={{
          fontFamily: "var(--font-amiri)",
          fontSize: 22,
          color: "#c9a24b",
        }}
      >
        ☽
      </span>
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          fontSize: 28,
          margin: "10px 0 26px",
          color: "#e6cf86",
        }}
      >
        {title}
      </h3>
      <p style={{ ...labelCaps, margin: "0 0 8px" }}>{relation}</p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 24,
          margin: 0,
          color: "#e9e1cf",
        }}
      >
        {parent1}
      </p>
      <p style={{ fontStyle: "italic", color: "#c9a24b", margin: "6px 0" }}>
        &amp;
      </p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 24,
          margin: "0 0 22px",
          color: "#e9e1cf",
        }}
      >
        {parent2}
      </p>
      <p style={{ ...labelCaps, margin: "0 0 6px" }}>Residence</p>
      <p style={{ fontSize: 16, color: "#bdb39c", margin: 0, lineHeight: 1.6 }}>
        {residence}
      </p>
    </div>
  );
}

export function Family() {
  return (
    <RevealSection style={{ padding: "90px 24px", textAlign: "center" }}>
      <p style={eyebrow}>The Family</p>
      <h2 style={heading}>With Blessings of Elders</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          justifyContent: "center",
          maxWidth: 920,
          margin: "0 auto",
        }}
      >
        <FamilyCard
          title="Groom's Family"
          relation="Son of"
          parent1="Ummer Koya"
          parent2="Zeenath Ummer Koya"
          residence="Mannur Rail, Kozhikode, Kerala"
        />
        <FamilyCard
          title="Bride's Family"
          relation="Daughter of"
          parent1="Sudheer Khan V"
          parent2="Sara P"
          residence="Farook College, Kozhikode, Kerala"
        />
      </div>
    </RevealSection>
  );
}

function DetailCard({
  icon,
  iconSize,
  label,
  title,
  children,
}: {
  icon: string;
  iconSize: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        flex: "1 1 240px",
        maxWidth: 300,
        padding: "44px 26px",
        border: "1px solid rgba(201,162,75,0.26)",
        borderRadius: "140px 140px 16px 16px",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div style={{ fontSize: iconSize, color: "#c9a24b", marginBottom: 18 }}>
        {icon}
      </div>
      <p style={{ ...labelCaps, margin: "0 0 10px" }}>{label}</p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 24,
          color: "#e9e1cf",
          margin: "0 0 4px",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

export function WeddingDetails() {
  return (
    <RevealSection style={{ padding: "90px 24px", textAlign: "center" }}>
      <p style={eyebrow}>The Occasion</p>
      <h2 style={heading}>Wedding Details</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 26,
          justifyContent: "center",
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        <DetailCard
          icon="☽"
          iconSize={26}
          label="Occasion"
          title="Reception & Nikah"
        >
          <p style={{ fontStyle: "italic", color: "#bdb39c", margin: 0 }}>
            Islamic Marriage
          </p>
        </DetailCard>

        <DetailCard
          icon="◈"
          iconSize={26}
          label="Date & Time"
          title="August 12, 2026"
        >
          <p style={{ fontStyle: "italic", color: "#bdb39c", margin: 0 }}>
            Wednesday · 4:00 – 9:00 PM
          </p>
        </DetailCard>

        <DetailCard
          icon="✦"
          iconSize={24}
          label="Venue"
          title="AMBIENCE Auditorium"
        >
          <p
            style={{
              fontStyle: "italic",
              color: "#bdb39c",
              margin: "0 0 18px",
              lineHeight: 1.5,
            }}
          >
            Kadalundi Road, Kashayapadi,
            <br />
            Feroke, Kozhikode
          </p>
          <a
            href="https://www.google.com/maps/dir//AMBIENCE+Auditorium,+Kadalundi+Road,+Kashayapadi,+Feroke,+Kozhikode,+Kerala+673631,+India/@11.1618863,75.845392,15z"
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-block",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0e1411",
              background: "linear-gradient(135deg,#e6cf86,#c9a24b)",
              padding: "11px 22px",
              borderRadius: 30,
              textDecoration: "none",
              fontFamily: "var(--font-eb-garamond)",
            }}
          >
            View Location
          </a>
        </DetailCard>
      </div>
    </RevealSection>
  );
}

export function QuranVerse() {
  return (
    <RevealSection
      style={{
        padding: "100px 24px",
        textAlign: "center",
        background:
          "radial-gradient(700px 400px at 50% 50%, rgba(201,162,75,0.06), transparent 70%)",
      }}
    >
      <p style={{ ...eyebrow, margin: "0 0 36px" }}>Word of Allah</p>
      <p
        dir="rtl"
        style={{
          fontFamily: "var(--font-amiri)",
          fontSize: "clamp(24px,4.5vw,34px)",
          lineHeight: 2.1,
          color: "#e6cf86",
          maxWidth: 760,
          margin: "0 auto 34px",
        }}
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: "clamp(18px,2.8vw,24px)",
          lineHeight: 1.7,
          color: "#cfc6b0",
          maxWidth: 680,
          margin: "0 auto 24px",
        }}
      >
        &ldquo;And of His signs is that He created for you from yourselves mates
        that you may find tranquillity in them; and He placed between you
        affection and mercy.&rdquo;
      </p>
      <p
        style={{
          fontSize: 14,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#a89263",
          margin: 0,
        }}
      >
        — Surah Ar-Rum, 30:21 —
      </p>
    </RevealSection>
  );
}

function BlessingCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "36px 30px",
        border: "1px solid rgba(201,162,75,0.22)",
        borderRadius: 16,
        background: "rgba(255,255,255,0.015)",
      }}
    >
      {children}
    </div>
  );
}

export function Blessings() {
  return (
    <RevealSection style={{ padding: "90px 24px", textAlign: "center" }}>
      <p style={eyebrow}>Words of Love</p>
      <h2 style={heading}>Blessings &amp; Wishes</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 26,
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        <BlessingCard>
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 48,
              lineHeight: 0.5,
              color: "#c9a24b",
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: 18,
              lineHeight: 1.7,
              color: "#cfc6b0",
              margin: "14px 0 16px",
            }}
          >
            May Allah bless this union with love, mercy, and tranquillity. May
            your home be filled with the light of faith and the warmth of
            togetherness.
          </p>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a89263",
              margin: 0,
            }}
          >
            — With Love
          </p>
        </BlessingCard>

        {/* <BlessingCard>
          <p
            dir="rtl"
            style={{
              fontFamily: "var(--font-amiri)",
              fontSize: 24,
              lineHeight: 1.9,
              color: "#e6cf86",
              margin: "0 0 14px",
            }}
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا
            فِي خَيْرٍ
          </p>
          <p
            style={{
              fontStyle: "italic",
              fontSize: 17,
              lineHeight: 1.6,
              color: "#cfc6b0",
              margin: "0 0 16px",
            }}
          >
            May Allah bless you both and shower His blessings upon you and bring
            you together in goodness.
          </p>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a89263",
              margin: 0,
            }}
          >
            — Prophetic Dua
          </p>
        </BlessingCard> */}

        <BlessingCard>
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 48,
              lineHeight: 0.5,
              color: "#c9a24b",
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: 18,
              lineHeight: 1.7,
              color: "#cfc6b0",
              margin: "14px 0 16px",
            }}
          >
            A beautiful journey begins today. May every step you take together
            be guided by His mercy. Wishing you a lifetime of happiness and
            barakah.
          </p>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a89263",
              margin: 0,
            }}
          >
            — Family &amp; Friends
          </p>
        </BlessingCard>
      </div>
    </RevealSection>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        padding: "80px 24px 70px",
        textAlign: "center",
        borderTop: "1px solid rgba(201,162,75,0.15)",
      }}
    >
      <p
        style={{
          fontStyle: "italic",
          fontSize: 18,
          lineHeight: 1.7,
          color: "#bdb39c",
          maxWidth: 520,
          margin: "0 auto 30px",
        }}
      >
        We humbly request your presence, your blessings, and your duas on this
        most sacred day.
      </p>
      <p
        dir="rtl"
        style={{
          fontFamily: "var(--font-amiri)",
          fontSize: 30,
          color: "#e6cf86",
          margin: "0 0 24px",
        }}
      >
        آمين
      </p>
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          fontSize: 40,
          margin: "0 0 10px",
          ...goldText,
        }}
      >
        Zahid &amp; Shahana
      </h3>
      <p
        dir="rtl"
        style={{
          fontFamily: "var(--font-amiri)",
          fontSize: 20,
          color: "#a89263",
          margin: "6px 0 0",
        }}
      >
        بَارَكَ اللَّهُ لَكُمَا
      </p>
    </footer>
  );
}
