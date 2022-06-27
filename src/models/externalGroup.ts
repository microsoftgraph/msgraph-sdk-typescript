import {Entity} from './entity';
import {Identity} from './externalConnectors/identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalGroup extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The description of the external group. Optional. */
    description?: string | undefined;
    /** The friendly name of the external group. Optional. */
    displayName?: string | undefined;
    /** A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members. */
    members?: Identity[] | undefined;
}
