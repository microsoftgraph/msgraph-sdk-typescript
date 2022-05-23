import {IdentitySet} from './identitySet';

export interface SharingInvitation{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The email address provided for the recipient of the sharing invitation. Read-only. */
    email?:string | undefined;
    /** Provides information about who sent the invitation that created this permission, if that information is available. Read-only. */
    invitedBy?:IdentitySet | undefined;
    /** The redeemedBy property */
    redeemedBy?:string | undefined;
    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only. */
    signInRequired?:boolean | undefined;
}
