import { UserProfileCard } from './UserProfileCard';

export function UserProfileTest() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
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
