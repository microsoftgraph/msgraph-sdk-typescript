import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';

export interface PublicError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Represents the error code. */
    code?:string | undefined;
    /** Details of the error. */
    details?:PublicErrorDetail[] | undefined;
    /** Details of the inner error. */
    innerError?:PublicInnerError | undefined;
    /** A non-localized message for the developer. */
    message?:string | undefined;
    /** The target of the error. */
    target?:string | undefined;
}
