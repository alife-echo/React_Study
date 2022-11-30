export let storageElements: string[] = []
export const Todo = (task: string) => {
  storageElements.push(task)
}
