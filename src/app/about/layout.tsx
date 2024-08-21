export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>About layout</h1>
            <div>{children}</div>
        </div>
    );
  }