import { AlertBox } from './AlertBox';

export function AlertBoxTest() {
  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      <AlertBox
        type="error"
        message="Everything is horrible!"
        onClose={() => alert('Fix the error')}
      >
        <p className="text-sm">fear the dark</p>
      </AlertBox>
      <AlertBox
        type="warning"
        message="Your profile might have been updated, or not..."
      >
        <p className="text-sm">See what happens.</p>
      </AlertBox>
      <AlertBox type="info" message="Something strange happened...">
        <p className="text-sm">Who knows?</p>
      </AlertBox>
    </>
  );
}
