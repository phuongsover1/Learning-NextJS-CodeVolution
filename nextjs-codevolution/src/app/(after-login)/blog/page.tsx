export default async function Blog() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 3000);
  });
  return <h1>My Blog!</h1>;
}
