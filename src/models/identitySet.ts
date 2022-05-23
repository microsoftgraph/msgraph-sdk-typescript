import {Identity} from './identity';

export interface IdentitySet{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The Identity of the Application. This property is read-only. */
    application?:Identity | undefined;
    /** The Identity of the Device. This property is read-only. */
    device?:Identity | undefined;
    /** The Identity of the User. This property is read-only. */
    user?:Identity | undefined;
}
