import { create } from 'zustand'

type OverflowType = 'hidden' | 'visible' | 'scroll'

type BodyStore = {
	overflow: OverflowType,
	setOverflow: (x: OverflowType) => void
}

export const useBodyStore = create<BodyStore>(set => ({
	overflow: 'visible',
	setOverflow: x => set({overflow: x})
}))