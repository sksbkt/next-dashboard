import SideMenu, { } from "./SideMenu";

export default {
    children: '',
    title: 'Compoenents/SideMenu',
    Component: SideMenu
};

const Template = (args: any) => {
    return (
        <SideMenu {...args} />
    )
};

const props = {
    defaultProps: () => ({})
}

export const SideMenuStory: any = Template.bind({});

const defaultProps = props.defaultProps();

SideMenuStory.storyName = 'SideMenu';
SideMenuStory.args = { ...defaultProps }