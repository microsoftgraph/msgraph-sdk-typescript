import {PublicErrorDetail} from './publicErrorDetail';

export interface PublicInnerError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The error code. */
    code?:string | undefined;
    /** A collection of error details. */
    details?:PublicErrorDetail[] | undefined;
    /** The error message. */
    message?:string | undefined;
    /** The target of the error. */
    target?:string | undefined;
}
