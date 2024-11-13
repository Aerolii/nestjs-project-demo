// 定义一个查询参数类
// 使用 @Query() 装饰器将查询参数绑定到类属性
// 类属性名必须与查询参数名相同

/**
 * 查询列表参数类
 */
export class ListAllEntities {
  limit: number;
}

/**
 * 创建猫的参数类
 */
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
