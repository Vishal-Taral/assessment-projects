export const treeData: TreeNode[] = [
  {
    type: 'directory',
    name: 'directory-1',
    contents: [
      { type: 'file', name: 'file-1.js' },
      { type: 'file', name: 'file-2.js' },
    ]
  },
  {
    type: 'directory',
    name: 'directory-2',
    contents: [
      { type: 'file', name: 'file-3.js' },
      {
        type: 'directory',
        name: 'directory-3',
        contents: [
          { type: 'file', name: 'file-4.js' },
          {
            type: 'directory',
            name: 'directory-4',
            contents: [
              { type: 'file', name: 'file-5.js' },
            ]
          },
          {
            type: 'directory',
            name: 'directory-8',
            contents: [
              { type: 'file', name: 'file-8.js' },
              {
                type: 'directory',
                name: 'directory-9',
                contents: [
                  { type: 'file', name: 'file-9.js' },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  { type: 'file', name: 'file-6.js' }
];
 
export type TreeNode = FileTreeNode | DirectoryTreeNode;
 
export interface FileTreeNode {
  type: 'file';
  name: string;
}
 
export interface DirectoryTreeNode {
  type: 'directory';
  name: string;
  contents: TreeNode[];
}