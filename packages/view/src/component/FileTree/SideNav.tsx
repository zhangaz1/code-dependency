import * as React from "react";
import * as SideNavItem from "./SideNavItem";

interface SideNavProps {
  items: SideNavItem.Props[];
}

interface TreeItemProps {
  items: SideNavItem.Props[];
  depth: number;
}

const TreeItem = (props: TreeItemProps) => {
  const elements = props.items.map((itemProps, idx) => {
    const childItems = itemProps.items;
    const children = childItems ? <TreeItem {...{ items: childItems, depth: props.depth + 1 }} /> : undefined;
    return (
      <SideNavItem.Component key={`SideNavItem-${props.depth}-${idx}`} {...itemProps} depth={props.depth}>
        {children}
      </SideNavItem.Component>
    );
  });
  return <>{elements}</>;
};

const SideNav = (props: SideNavProps) => {
  return (
    <nav>
      <TreeItem {...{ items: props.items, depth: 0 }} />
    </nav>
  );
};

export { SideNav as Component, SideNavProps as Props };
