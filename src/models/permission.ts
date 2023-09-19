import { type Entity } from './entity';
import { type IdentitySet } from './identitySet';
import { type ItemReference } from './itemReference';
import { type SharePointIdentitySet } from './sharePointIdentitySet';
import { type SharingInvitation } from './sharingInvitation';
import { type SharingLink } from './sharingLink';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Permission extends Entity, Parsable {
    /**
     * A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there's no expiration set for this permission. Optional.
     */
    expirationDateTime?: Date | undefined;
    /**
     * The grantedTo property
     */
    grantedTo?: IdentitySet | undefined;
    /**
     * The grantedToIdentities property
     */
    grantedToIdentities?: IdentitySet[] | undefined;
    /**
     * For link type permissions, the details of the users to whom permission was granted. Read-only.
     */
    grantedToIdentitiesV2?: SharePointIdentitySet[] | undefined;
    /**
     * For user type permissions, the details of the users and applications for this permission. Read-only.
     */
    grantedToV2?: SharePointIdentitySet | undefined;
    /**
     * Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only..
     */
    hasPassword?: boolean | undefined;
    /**
     * Provides a reference to the ancestor of the current permission, if it's inherited from an ancestor. Read-only.
     */
    inheritedFrom?: ItemReference | undefined;
    /**
     * Details of any associated sharing invitation for this permission. Read-only.
     */
    invitation?: SharingInvitation | undefined;
    /**
     * Provides the link details of the current permission, if it's a link type permission. Read-only.
     */
    link?: SharingLink | undefined;
    /**
     * The type of permission, for example, read. See below for the full list of roles. Read-only.
     */
    roles?: string[] | undefined;
    /**
     * A unique token that can be used to access this shared item via the shares API. Read-only.
     */
    shareId?: string | undefined;
}
