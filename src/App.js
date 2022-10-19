import Tree from './react-ui-stripped/Tree';
import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import "./Variables.css"

const action = (name) => () => console.log(name)

export const App = () => (
	<DndProvider backend={Backend}>
		<div style={{width: "500px", border: "1px solid grey", padding: "1rem", background: "black"}}>
			<Tree>
				<Tree.Node>
					<Tree.Node.Header
						nodeDndType={"neos-tree-node"}
						hasChildren={true}
						isCollapsed={false}
						isActive={true}
						isFocused={true}
						isLoading={false}
						hasError={false}
						level={1}
						label="Parent Node"
						dragAndDropContext={{
							accepts: () => false,
							onDrag: action('onDrag'),
							onDrop: action('onDrop'),
							onEndDrag: action('onEndDrag'),
							onDropBefore: action('dropBefore'),
							onDropInto: action('dropInto')
						}}
					/>
					<Tree.Node.Contents>
						<Tree.Node>
							<Tree.Node.Header
								nodeDndType={"neos-tree-node"}
								hasChildren={false}
								isCollapsed={true}
								isActive={false}
								isFocused={false}
								isLoading={false}
								hasError={false}
								dragAndDropContext={{
									data: 'hello',
									accepts: () => true,
									onDrag: action('onDrag'),
									onDrop: action('onDrop'),
									onEndDrag: action('onEndDrag'),
									onDropBefore: action('dropBefore'),
									onDropInto: action('dropInto')
								}}
								label="A Normal node"
								level={2}
							/>
						</Tree.Node>
						<Tree.Node>
							<Tree.Node.Header
								nodeDndType={"neos-tree-node"}
								hasChildren={false}
								isCollapsed={true}
								isActive={false}
								isFocused={false}
								isLoading={false}
								hasError={false}
								level={2}
								dragAndDropContext={{
									data: 'hello',
									accepts: () => true,
									onDrag: action('onDrag'),
									onDrop: action('onDrop'),
									onEndDrag: action('onEndDrag'),
									onDropBefore: action('dropBefore'),
									onDropInto: action('dropInto')
								}}
								label="B Normal node"
							/>
						</Tree.Node>
					</Tree.Node.Contents>
				</Tree.Node>
			</Tree>
		</div>
	</DndProvider>
)
