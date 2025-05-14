
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tbl_user
 * 
 */
export type tbl_user = $Result.DefaultSelection<Prisma.$tbl_userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_users
 * const tbl_users = await prisma.tbl_user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_users
   * const tbl_users = await prisma.tbl_user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tbl_user`: Exposes CRUD operations for the **tbl_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_users
    * const tbl_users = await prisma.tbl_user.findMany()
    * ```
    */
  get tbl_user(): Prisma.tbl_userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_user: 'tbl_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tbl_user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_user: {
        payload: Prisma.$tbl_userPayload<ExtArgs>
        fields: Prisma.tbl_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findFirst: {
            args: Prisma.tbl_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findMany: {
            args: Prisma.tbl_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>[]
          }
          create: {
            args: Prisma.tbl_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          createMany: {
            args: Prisma.tbl_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          update: {
            args: Prisma.tbl_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          deleteMany: {
            args: Prisma.tbl_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          aggregate: {
            args: Prisma.Tbl_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_user>
          }
          groupBy: {
            args: Prisma.tbl_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_userCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tbl_user?: tbl_userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tbl_user
   */

  export type AggregateTbl_user = {
    _count: Tbl_userCountAggregateOutputType | null
    _avg: Tbl_userAvgAggregateOutputType | null
    _sum: Tbl_userSumAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  export type Tbl_userAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type Tbl_userSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type Tbl_userMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    role: number | null
    birthAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tbl_userMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    role: number | null
    birthAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tbl_userCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    email: number
    password: number
    role: number
    birthAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Tbl_userAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type Tbl_userSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type Tbl_userMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    birthAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tbl_userMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    birthAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tbl_userCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    role?: true
    birthAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Tbl_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_user to aggregate.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_users
    **/
    _count?: true | Tbl_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_userMaxAggregateInputType
  }

  export type GetTbl_userAggregateType<T extends Tbl_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_user[P]>
      : GetScalarType<T[P], AggregateTbl_user[P]>
  }




  export type tbl_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_userWhereInput
    orderBy?: tbl_userOrderByWithAggregationInput | tbl_userOrderByWithAggregationInput[]
    by: Tbl_userScalarFieldEnum[] | Tbl_userScalarFieldEnum
    having?: tbl_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_userCountAggregateInputType | true
    _avg?: Tbl_userAvgAggregateInputType
    _sum?: Tbl_userSumAggregateInputType
    _min?: Tbl_userMinAggregateInputType
    _max?: Tbl_userMaxAggregateInputType
  }

  export type Tbl_userGroupByOutputType = {
    id: number
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    role: number
    birthAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Tbl_userCountAggregateOutputType | null
    _avg: Tbl_userAvgAggregateOutputType | null
    _sum: Tbl_userSumAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  type GetTbl_userGroupByPayload<T extends tbl_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
        }
      >
    >


  export type tbl_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    birthAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tbl_user"]>



  export type tbl_userSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    birthAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tbl_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "email" | "password" | "role" | "birthAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tbl_user"]>

  export type $tbl_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      name: string | null
      email: string | null
      password: string | null
      role: number
      birthAt: Date | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["tbl_user"]>
    composites: {}
  }

  type tbl_userGetPayload<S extends boolean | null | undefined | tbl_userDefaultArgs> = $Result.GetResult<Prisma.$tbl_userPayload, S>

  type tbl_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_userCountAggregateInputType | true
    }

  export interface tbl_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_user'], meta: { name: 'tbl_user' } }
    /**
     * Find zero or one Tbl_user that matches the filter.
     * @param {tbl_userFindUniqueArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_userFindUniqueArgs>(args: SelectSubset<T, tbl_userFindUniqueArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_userFindUniqueOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_userFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_userFindFirstArgs>(args?: SelectSubset<T, tbl_userFindFirstArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_userFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany()
     * 
     * // Get first 10 Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_userWithIdOnly = await prisma.tbl_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_userFindManyArgs>(args?: SelectSubset<T, tbl_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_user.
     * @param {tbl_userCreateArgs} args - Arguments to create a Tbl_user.
     * @example
     * // Create one Tbl_user
     * const Tbl_user = await prisma.tbl_user.create({
     *   data: {
     *     // ... data to create a Tbl_user
     *   }
     * })
     * 
     */
    create<T extends tbl_userCreateArgs>(args: SelectSubset<T, tbl_userCreateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_users.
     * @param {tbl_userCreateManyArgs} args - Arguments to create many Tbl_users.
     * @example
     * // Create many Tbl_users
     * const tbl_user = await prisma.tbl_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_userCreateManyArgs>(args?: SelectSubset<T, tbl_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_user.
     * @param {tbl_userDeleteArgs} args - Arguments to delete one Tbl_user.
     * @example
     * // Delete one Tbl_user
     * const Tbl_user = await prisma.tbl_user.delete({
     *   where: {
     *     // ... filter to delete one Tbl_user
     *   }
     * })
     * 
     */
    delete<T extends tbl_userDeleteArgs>(args: SelectSubset<T, tbl_userDeleteArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_user.
     * @param {tbl_userUpdateArgs} args - Arguments to update one Tbl_user.
     * @example
     * // Update one Tbl_user
     * const tbl_user = await prisma.tbl_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_userUpdateArgs>(args: SelectSubset<T, tbl_userUpdateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_users.
     * @param {tbl_userDeleteManyArgs} args - Arguments to filter Tbl_users to delete.
     * @example
     * // Delete a few Tbl_users
     * const { count } = await prisma.tbl_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_userDeleteManyArgs>(args?: SelectSubset<T, tbl_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_users
     * const tbl_user = await prisma.tbl_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_userUpdateManyArgs>(args: SelectSubset<T, tbl_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_user.
     * @param {tbl_userUpsertArgs} args - Arguments to update or create a Tbl_user.
     * @example
     * // Update or create a Tbl_user
     * const tbl_user = await prisma.tbl_user.upsert({
     *   create: {
     *     // ... data to create a Tbl_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_user we want to update
     *   }
     * })
     */
    upsert<T extends tbl_userUpsertArgs>(args: SelectSubset<T, tbl_userUpsertArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userCountArgs} args - Arguments to filter Tbl_users to count.
     * @example
     * // Count the number of Tbl_users
     * const count = await prisma.tbl_user.count({
     *   where: {
     *     // ... the filter for the Tbl_users we want to count
     *   }
     * })
    **/
    count<T extends tbl_userCountArgs>(
      args?: Subset<T, tbl_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_userAggregateArgs>(args: Subset<T, Tbl_userAggregateArgs>): Prisma.PrismaPromise<GetTbl_userAggregateType<T>>

    /**
     * Group by Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_userGroupByArgs['orderBy'] }
        : { orderBy?: tbl_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_user model
   */
  readonly fields: tbl_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_user model
   */
  interface tbl_userFieldRefs {
    readonly id: FieldRef<"tbl_user", 'Int'>
    readonly uuid: FieldRef<"tbl_user", 'String'>
    readonly name: FieldRef<"tbl_user", 'String'>
    readonly email: FieldRef<"tbl_user", 'String'>
    readonly password: FieldRef<"tbl_user", 'String'>
    readonly role: FieldRef<"tbl_user", 'Int'>
    readonly birthAt: FieldRef<"tbl_user", 'DateTime'>
    readonly createdAt: FieldRef<"tbl_user", 'DateTime'>
    readonly updatedAt: FieldRef<"tbl_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_user findUnique
   */
  export type tbl_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findUniqueOrThrow
   */
  export type tbl_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findFirst
   */
  export type tbl_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findFirstOrThrow
   */
  export type tbl_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findMany
   */
  export type tbl_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user create
   */
  export type tbl_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_user.
     */
    data?: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
  }

  /**
   * tbl_user createMany
   */
  export type tbl_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_users.
     */
    data: tbl_userCreateManyInput | tbl_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_user update
   */
  export type tbl_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_user.
     */
    data: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
    /**
     * Choose, which tbl_user to update.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user updateMany
   */
  export type tbl_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_users.
     */
    data: XOR<tbl_userUpdateManyMutationInput, tbl_userUncheckedUpdateManyInput>
    /**
     * Filter which tbl_users to update
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to update.
     */
    limit?: number
  }

  /**
   * tbl_user upsert
   */
  export type tbl_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_user to update in case it exists.
     */
    where: tbl_userWhereUniqueInput
    /**
     * In case the tbl_user found by the `where` argument doesn't exist, create a new tbl_user with this data.
     */
    create: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
    /**
     * In case the tbl_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
  }

  /**
   * tbl_user delete
   */
  export type tbl_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Filter which tbl_user to delete.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user deleteMany
   */
  export type tbl_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_users to delete
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to delete.
     */
    limit?: number
  }

  /**
   * tbl_user without action
   */
  export type tbl_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_userScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    birthAt: 'birthAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Tbl_userScalarFieldEnum = (typeof Tbl_userScalarFieldEnum)[keyof typeof Tbl_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tbl_userOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type tbl_userOrderByRelevanceFieldEnum = (typeof tbl_userOrderByRelevanceFieldEnum)[keyof typeof tbl_userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_userWhereInput = {
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    id?: IntFilter<"tbl_user"> | number
    uuid?: StringNullableFilter<"tbl_user"> | string | null
    name?: StringNullableFilter<"tbl_user"> | string | null
    email?: StringNullableFilter<"tbl_user"> | string | null
    password?: StringNullableFilter<"tbl_user"> | string | null
    role?: IntFilter<"tbl_user"> | number
    birthAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
  }

  export type tbl_userOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    birthAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: tbl_userOrderByRelevanceInput
  }

  export type tbl_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    uuid?: StringNullableFilter<"tbl_user"> | string | null
    name?: StringNullableFilter<"tbl_user"> | string | null
    email?: StringNullableFilter<"tbl_user"> | string | null
    password?: StringNullableFilter<"tbl_user"> | string | null
    role?: IntFilter<"tbl_user"> | number
    birthAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"tbl_user"> | Date | string | null
  }, "id">

  export type tbl_userOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    birthAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: tbl_userCountOrderByAggregateInput
    _avg?: tbl_userAvgOrderByAggregateInput
    _max?: tbl_userMaxOrderByAggregateInput
    _min?: tbl_userMinOrderByAggregateInput
    _sum?: tbl_userSumOrderByAggregateInput
  }

  export type tbl_userScalarWhereWithAggregatesInput = {
    AND?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    OR?: tbl_userScalarWhereWithAggregatesInput[]
    NOT?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_user"> | number
    uuid?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    name?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    email?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    password?: StringNullableWithAggregatesFilter<"tbl_user"> | string | null
    role?: IntWithAggregatesFilter<"tbl_user"> | number
    birthAt?: DateTimeNullableWithAggregatesFilter<"tbl_user"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"tbl_user"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"tbl_user"> | Date | string | null
  }

  export type tbl_userCreateInput = {
    uuid?: string | null
    name?: string | null
    email?: string | null
    password?: string | null
    role?: number
    birthAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type tbl_userUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    name?: string | null
    email?: string | null
    password?: string | null
    role?: number
    birthAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type tbl_userUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    birthAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    birthAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_userCreateManyInput = {
    id?: number
    uuid?: string | null
    name?: string | null
    email?: string | null
    password?: string | null
    role?: number
    birthAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type tbl_userUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    birthAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    birthAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_userOrderByRelevanceInput = {
    fields: tbl_userOrderByRelevanceFieldEnum | tbl_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_userCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    birthAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_userAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type tbl_userMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    birthAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_userMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    birthAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_userSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}