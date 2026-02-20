import React from 'react';
import { skillsData } from './skillsData';

/*
  Pill styles:
  - "expert"   → filled olive pill  (solid background, light text)
  - "familiar" → outlined pill      (transparent, olive border + text)

  Colors pulled from your existing site palette:
    --olive:      #4a5e3a  (dark green used in section headers / buttons)
    --olive-mid:  #6b7c56  (slightly lighter for hover)
    --text-light: #f5f0e8  (off-white for filled pill text)
*/

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
    padding: '1rem 0 4rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  categoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  categoryTitle: {
    fontWeight: '700',
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#4a5e3a',
    marginBottom: '0.75rem',
    paddingBottom: '0.35rem',
    borderBottom: '2px solid #4a5e3a',
    width: '100%',
  },
  pillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  pillExpert: {
    display: 'inline-block',
    padding: '0.3rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.82rem',
    fontWeight: '600',
    backgroundColor: '#4a5e3a',
    color: '#f5f0e8',
    border: '2px solid #4a5e3a',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
  },
  pillFamiliar: {
    display: 'inline-block',
    padding: '0.3rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.82rem',
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: '#4a5e3a',
    border: '2px solid #4a5e3a',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1.75rem',
    fontSize: '0.78rem',
    color: '#6b7c56',
    flexWrap: 'wrap',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  legendDotFilled: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#4a5e3a',
    display: 'inline-block',
  },
  legendDotOutline: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '2px solid #4a5e3a',
    display: 'inline-block',
  },
};

function SkillsComponent() {
  return (
    <div className="text-center">
      <div style={styles.wrapper}>
        {skillsData.map((category, i) => (
          <div key={i} style={styles.categoryBlock}>
            <div style={styles.categoryTitle}>{category.category}</div>
            <div style={styles.pillsRow}>
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  style={skill.level === 'expert' ? styles.pillExpert : styles.pillFamiliar}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={styles.legend}>
        <span style={styles.legendItem}>
          <span style={styles.legendDotFilled} />
          Proficient
        </span>
        <span style={styles.legendItem}>
          <span style={styles.legendDotOutline} />
          Familiar
        </span>
      </div>
    </div>
  );
}

export default SkillsComponent;