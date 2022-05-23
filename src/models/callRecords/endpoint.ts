import {UserAgent} from './userAgent';

export interface Endpoint{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** User-agent reported by this endpoint. */
    userAgent?:UserAgent | undefined;
}
