type Props = {
  children: React.ReactNode;
  condition: boolean;
};

const ConditionalView = (props: Props) => (
  <>{!!props.condition && props.children}</>
);

export default ConditionalView;
