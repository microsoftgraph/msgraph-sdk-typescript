import {ExternalConnection} from './externalConnection';

export interface External{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The connections property */
    connections?:ExternalConnection[] | undefined;
}
