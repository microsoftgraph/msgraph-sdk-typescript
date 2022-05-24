import {ItemReference} from '../../../../../../../../models/itemReference';

export interface CopyToDefaultContentLocationPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The destinationFileName property */
    destinationFileName?:string | undefined;
    /** The sourceFile property */
    sourceFile?:ItemReference | undefined;
}
