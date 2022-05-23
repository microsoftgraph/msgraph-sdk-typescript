import {AccessPackage} from '../../../../models/accessPackage';

export interface FilterByCurrentUserWithOnResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:AccessPackage[] | undefined;
}
