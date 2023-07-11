import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Count of guests in a team.
     */
    guestsCount?: number | undefined;
    /**
     * Count of members in a team.
     */
    membersCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Count of owners in a team.
     */
    ownersCount?: number | undefined;
}
