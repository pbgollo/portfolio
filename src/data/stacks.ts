import { assetUrl } from '../utils/assetUrl'

export type Stack = {
  name: string
  src: string
}

export const stacks: Stack[] = [
  { name: 'C#', src: assetUrl('stacks/csharp.svg') },
  { name: 'PostgreSQL', src: assetUrl('stacks/postgresql.svg') },
  { name: 'MySQL', src: assetUrl('stacks/mysql.svg') },
  { name: 'Flutter', src: assetUrl('stacks/flutter.svg') },
  { name: 'React Native', src: assetUrl('stacks/react.svg') },
  { name: 'Angular', src: assetUrl('stacks/angular.svg') },
  { name: 'GitHub', src: assetUrl('stacks/github.svg') },
  { name: 'Firebase', src: assetUrl('stacks/firebase.svg') },
]
