import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlStateUpdate extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Assigns the control to the user who will take the action.
     */
    assignedTo?: string | undefined;
    /**
     * Provides optional comment about the control.
     */
    comment?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty).
     */
    state?: string | undefined;
    /**
     * ID of the user who updated tenant state.
     */
    updatedBy?: string | undefined;
    /**
     * Time at which the control state was updated.
     */
    updatedDateTime?: Date | undefined;
}
