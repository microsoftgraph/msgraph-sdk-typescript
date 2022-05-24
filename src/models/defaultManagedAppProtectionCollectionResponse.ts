import {DefaultManagedAppProtection} from './defaultManagedAppProtection';

export interface DefaultManagedAppProtectionCollectionResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The nextLink property */
    nextLink?:string | undefined;
    /** The value property */
    value?:DefaultManagedAppProtection[] | undefined;
}
