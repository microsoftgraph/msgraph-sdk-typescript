
export interface ItemActionStat{
    /** The number of times the action took place. Read-only. */
    actionCount?:number | undefined;
    /** The number of distinct actors that performed the action. Read-only. */
    actorCount?:number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
}
