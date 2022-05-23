import {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';

export interface DeltaResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:OAuth2PermissionGrant[] | undefined;
}
