import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagMember extends Entity, Parsable {
    /**
     * The member's display name.
     */
    displayName?: string | undefined;
    /**
     * The ID of the tenant that the tag member is a part of.
     */
    tenantId?: string | undefined;
    /**
     * The user ID of the member.
     */
    userId?: string | undefined;
}
