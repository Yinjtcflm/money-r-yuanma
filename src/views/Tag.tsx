import { useParams } from "react-router-dom";
import { useTags } from "useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";
import { Input } from "components/Input";
import { Center } from "components/Center";
import { Space } from "components/Space";

type Params = { id: string };
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 14px;
  padding: 20px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 14px 16px;
  margin-top: 8px;
`;
const Tag: React.FC = (props) => {
  const { findTag, updateTag } = useTags();
  let { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
