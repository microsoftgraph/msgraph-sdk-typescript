import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignedTrainingInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of users who were assigned the training in an attack simulation and training campaign.
     */
    assignedUserCount?: number | undefined;
    /**
     * Number of users who completed the training in an attack simulation and training campaign.
     */
    completedUserCount?: number | undefined;
    /**
     * Display name of the training in an attack simulation and training campaign.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
