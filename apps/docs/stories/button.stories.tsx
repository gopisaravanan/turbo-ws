import type { Meta, StoryObj } from "@storybook/react";
// import { Button } from "@acme/ui/button";
// import { Button } from "@gopisaravanan/ids-button";
import Button from "@gopisaravanan/ids-button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    componentType: 'server',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4FFZRIZ8z0L2DuZGKBodg9/Ignition-design-system?type=design&node-id=569-104&t=BUCqPXUtDUCIi16g-4',
    },
    subtitle:
      'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */


export const BasicButton: Story = {
  name: 'Basic button',
  render: (args) => (
    <div className="flex gap-4">
      <Button>Contained</Button>
    </div>
  ),
};

