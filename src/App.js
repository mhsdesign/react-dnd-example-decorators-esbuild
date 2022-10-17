import React, { memo, useState, useMemo, useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import { componentIndex } from './examples'
import Backend from 'react-dnd-html5-backend'

const exampleNames = Object.keys(componentIndex)

const AppGuts = () => {
	const [name, setName] = useState('chessboard')
	const Example = useMemo(() => componentIndex[name], [name])

	return (
		<div className="App">
			<select
				onChange={useCallback(evt => setName(evt.target.value), [setName])}
			>
				{exampleNames.map(n => (
					<option key={n} value={n}>
						{n}
					</option>
				))}
			</select>
			<Example />
		</div>
	)
}

export const App = memo(() => (
	<DndProvider backend={Backend}>
		<AppGuts />
	</DndProvider>
))
