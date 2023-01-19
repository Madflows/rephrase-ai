import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import Page from "@/components/shared/Page";

export default function Home() {
  return (
    <Page className="w-full ">
      <div className="max-w-6xl px-6 mx-auto space-y-[3rem] pt-[3rem]">
        <Header />
        <FormSection />
      </div>
    </Page>
  );
}
