import { create } from 'zustand'

type OverflowType = 'hidden' | 'visible' | 'scroll'

type BodyStore = {
	overflow: OverflowType
}

export const useBodyStore = create<BodyStore>(set => ({
	overflow: 'visible',
	setOverflow: (x: OverflowType) => set({overflow: x})
}))