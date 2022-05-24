import {ErrorDetails} from './errorDetails';
import {InnerError} from './innerError';

export interface MainError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The code property */
    code?:string | undefined;
    /** The details property */
    details?:ErrorDetails[] | undefined;
    /** The innererror property */
    innererror?:InnerError | undefined;
    /** The message property */
    message?:string | undefined;
    /** The target property */
    target?:string | undefined;
}
