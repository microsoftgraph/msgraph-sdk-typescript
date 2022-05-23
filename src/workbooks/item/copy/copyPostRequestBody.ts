import {ItemReference} from '../../../models/itemReference';

export interface CopyPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The name property */
    name?:string | undefined;
    /** The parentReference property */
    parentReference?:ItemReference | undefined;
}
