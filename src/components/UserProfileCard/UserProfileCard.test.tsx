import { UserProfileCard } from './UserProfileCard';

export function UserProfileTest() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.tR2Umw6O108_1cjdtEOb8QHaHT%3Fpid%3DApi&f=1&ipt=fbac7ec93521c3603bcff925465af286960dd4d965181dfb0295a5f534b19bfa&ipo=images'
  };
  const user2 = {
    id: '2',
    name: 'Fred Smith',
    email: 'who.is.fred@example.com',
    role: 'CEO'
  };

  return (
    <>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={userId => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>{' '}
      <UserProfileCard
        user={user2}
        showEmail={false}
        showRole={false}
        onEdit={userId => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Fred don't care</div>
      </UserProfileCard>
    </>
  );
}
