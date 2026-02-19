import React from 'react';
import { Table } from 'react-bootstrap';
import { skillsData } from './skillsData';

function SkillsComponent() {
  const splitSkillsIntoColumns = (skills) => {
    return [skills.slice(0, 3), skills.slice(3)];
  };

  return (
    <div className='align-items-center text-center'>
      {skillsData.map((skillCategory, index) => {
        const [leftColumn, rightColumn] = splitSkillsIntoColumns(skillCategory.skills);

        return (
          <Table key={index} borderless className=" text-center skills-table d-inline-block mb-5">
            <thead className='text-start'>
              <tr>
                <th className='skill-title'>{skillCategory.category}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='skills-row'>
                  <Table hover className="">
                    <tbody>
                      {leftColumn.map((skill, skillIndex) => (
                        <tr key={skillIndex} className="skill">
                          <td>{skill.name}</td>
                          <td>{skill.rating}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
                {rightColumn.length > 0 && (
                  <td className='skills-row'>
                    <Table hover className="">
                      <tbody>
                        {rightColumn.map((skill, skillIndex) => (
                          <tr key={skillIndex} className="skill">
                            <td>{skill.name}</td>
                            <td>{skill.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </td>
                )}
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
}

export default SkillsComponent;
