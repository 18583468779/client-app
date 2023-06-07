type PropsType = {
  info: string;
};

export default function About(props: PropsType) {
  console.log(props);
  return (
    <div>
      <main>
        <h1>About page</h1>
        <p>{props.info}</p>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   //这个函数只在build的时候执行，sg
//   return {
//     props: {
//       info: "静态的资源",
//     },
//   };
// }

export async function getServerSideProps() {
  return {
    props: {
      info: "请求的数据",
    },
  };
}
