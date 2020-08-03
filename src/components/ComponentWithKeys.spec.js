import { shallowMount } from '@vue/test-utils'
import ComponentWithKeys from '@/components/ComponentWithKeys'
import Item from '@/components/Item'

describe('ComponentWithKeys', () => {
  it('test key in Component', () => {
    const wrapper = shallowMount(ComponentWithKeys)
    const item = wrapper.findComponent(Item)
    // for Component use vw.$vnode
    expect(item.vm.$vnode.key).toBe('key-1')
  })

  it('test key in div', () => {
    const wrapper = shallowMount(ComponentWithKeys)
    const item = wrapper.find('.div-item')
    // for html element use vnode
    expect(item.vnode.key).toBe('key-1')
  })
})
