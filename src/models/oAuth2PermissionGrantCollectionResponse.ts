import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';

export interface OAuth2PermissionGrantCollectionResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The nextLink property */
    nextLink?:string | undefined;
    /** The value property */
    value?:OAuth2PermissionGrant[] | undefined;
}
