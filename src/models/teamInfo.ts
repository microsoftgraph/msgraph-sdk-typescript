import {Entity} from './entity';
import {Team} from './team';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamInfo extends Entity, Parsable {
    /**
     * The name of the team.
     */
    displayName?: string | undefined;
    /**
     * The team property
     */
    team?: Team | undefined;
    /**
     * The ID of the Azure Active Directory tenant.
     */
    tenantId?: string | undefined;
}
