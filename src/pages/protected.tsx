import { getSession } from "next-auth/react";

export default function ProtectedPage({ user }: any) {
  if (!user) {
    return <div>{"Loading..."}</div>;
  }

  return <div>Welcome, {user.email}</div>;
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
