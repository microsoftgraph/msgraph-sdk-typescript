import {Entity} from './entity';
import {Team} from './team';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamInfo extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the team. */
    displayName?: string | undefined;
    /** The team property */
    team?: Team | undefined;
    /** The ID of the Azure Active Directory tenant. */
    tenantId?: string | undefined;
}
