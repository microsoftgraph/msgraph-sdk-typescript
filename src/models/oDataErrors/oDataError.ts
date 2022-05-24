import {MainError} from './mainError';

export interface ODataError{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The error property */
    error_escaped?:MainError | undefined;
}
