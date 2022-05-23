import {KeyValue} from './keyValue';

export interface AddIn{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The id property */
    id?:string | undefined;
    /** The properties property */
    properties?:KeyValue[] | undefined;
    /** The type property */
    type?:string | undefined;
}
