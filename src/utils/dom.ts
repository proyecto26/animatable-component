/**
 * Get element to animate
 */
export const getElementToAnimate = (
  parent: HTMLElement
): HTMLElement => {
  return parent.shadowRoot !== null ? parent : (
    parent.firstElementChild
    || (parent.children.length && parent.children[0])
    || parent
  ) as HTMLElement;
}