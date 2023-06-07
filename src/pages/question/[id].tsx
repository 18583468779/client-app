import QuestionInput from "@/component/QuestionComponents/QuestionInput";
import QuestionRadio from "@/component/QuestionComponents/QuestionRadio";
import styles from "@/styles/Question.module.scss";

type PropsType = {
  id: string;
};

export default function Question(props: PropsType) {
  console.log(props);
  return (
    <div>
      <main>
        <h1>Question page</h1>
        <p>{props.id}</p>

        <form action="">
          <QuestionInput
            fe_id="c1"
            props={{ title: "你的姓名", placeholder: "请输入您的姓名" }}
          />
          <QuestionRadio
            fe_id="c2"
            props={{
              title: "你的姓别",
              options: [
                { value: "male", text: "男" },
                { value: "female", text: "女" },
              ],
              value: "male",
              isVertical: false,
            }}
          />
          <div className={styles.submitBtnContainer}>
            <button type="submit">提交</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export async function getServerSideProps(content: any) {
  console.log();
  const { id } = content.params;
  return {
    props: {
      id,
    },
  };
}
