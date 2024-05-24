import React, { useState } from 'react';
import { treeData, TreeNode } from '../../Api/data';
import styles from '../../styles/derectories.module.scss';
import imgIcon from '../../public/images/down-arrow-icon.svg'

interface DirectoryComponentProps {
  treeData: TreeNode[];
}

const DirectoryComponent = ({ treeData } : any) => {
  const [expandedDirectories, setExpandedDirectories] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (dirName: string) => {
    setExpandedDirectories(prev => ({
      ...prev,
      [dirName]: !prev[dirName],
    }));
  };

  const directories = (directory1: TreeNode[]) => {
    return directory1.map(node => {
      if (node.type === 'directory') {
        const isExpanded = expandedDirectories[node.name];
        return (
          <div key={node.name} className={styles.directoryItem}>
            <div onClick={() => toggleExpand(node.name)} className={styles.directory}>
              <span className={styles.icon}>{isExpanded ? '-' : '+'}</span>
              {node.name}
            </div>
            {isExpanded && (
              <div className={styles.contents}>
                {directories(node.contents)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div key={node.name} className={styles.file}>
            {node.name}
          </div>
        );
      }
    });
  };

  return (
    <div className={styles.filesContainer}>
      {directories(treeData)}
    </div>
  );
};

export default DirectoryComponent;
