import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {ItemReference} from './itemReference';
import {User} from './user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItem extends Entity, Parsable {
    /**
     * Identity of the user, device, or application which created the item. Read-only.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Identity of the user who created the item. Read-only.
     */
    createdByUser?: User | undefined;
    /**
     * Date and time of item creation. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Provides a user-visible description of the item. Optional.
     */
    description?: string | undefined;
    /**
     * ETag for the item. Read-only.
     */
    eTag?: string | undefined;
    /**
     * Identity of the user, device, and application which last modified the item. Read-only.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * Identity of the user who last modified the item. Read-only.
     */
    lastModifiedByUser?: User | undefined;
    /**
     * Date and time the item was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The name of the item. Read-write.
     */
    name?: string | undefined;
    /**
     * Parent information, if the item has a parent. Read-write.
     */
    parentReference?: ItemReference | undefined;
    /**
     * URL that displays the resource in the browser. Read-only.
     */
    webUrl?: string | undefined;
}
