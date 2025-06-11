import type { UserProfileCardProps } from '../../types/index';

// Show a customizable user profile card
// user passes in all the relevant person's details (name, email, etc.)
// showEmail controls if the email address is shown
// showRole controls if the user's role is shown
// onEdit is the edit button's event handler
// children passes through any child elements

export function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children
}: UserProfileCardProps) {
  return (
    <article className="border border-gray-300 shadow-md rounded-lg items-center m-5 p-5 bg-gray-50 w-fit mx-auto">
      <div className="flex gap-5">
        {user.avatarUrl && (
          <img src={user.avatarUrl} height="100px" width="100px" />
        )}
        <div className="text-center m-auto">
          <h2 className="text-xl font-bold mb-3">{user.name}</h2>
          <h3 className="text-lg font-medium">{showEmail ? user.email : ''}</h3>
          <h4>{showRole ? user.role : ''}</h4>
        </div>
      </div>
      {onEdit && (
        <button
          id="edit"
          onClick={() => onEdit(user.name)}
          className="border rounded-md p-1 bg-blue-600 text-white my-2 w-full"
        >
          Edit
        </button>
      )}
      {children}
    </article>
  );
}
