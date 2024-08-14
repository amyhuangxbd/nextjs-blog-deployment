

```typescript
/**
 * @file objToArray
 *
 * 将对象按照要求转为数组
 * 注意console示例运行结果
 */
type Obj = Record<string, string>;
interface FormatItem {
  key: string;
  op: string;
  value: string;
}

function objToArray(obj: Record<string, Obj>): FormatItem[] {
  // 补全此处代码
  const keys = Object.keys(obj);
  let ans = []
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const v = obj[key]
    const entries = Object.entries(v);
    
    for (let j = 0; j < entries.length; j++) {
        const entry = entries[0];
        ans.push({key, op: entry[0], value: entry[1]})
    }
  }
  return ans;
}

console.log(
  objToArray({
    key1: {
      op1: "value1",
    },
    key2: {
      op2: "value2",
    },
  })
);
// result示例
// [
//     {key: 'key1', op: 'op1', value: 'value1'},
//     {key: 'key2', op: 'op2', value: 'value2'}
// ]

export default {};

```