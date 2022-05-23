import {BodyType} from './bodyType';

export interface EducationItemBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The content property */
    content?:string | undefined;
    /** The contentType property */
    contentType?:BodyType | undefined;
}
