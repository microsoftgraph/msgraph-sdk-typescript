import {ActionState} from './actionState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceActionResult extends AdditionalDataHolder, Parsable {
    /**
     * Action name
     */
    actionName?: string | undefined;
    /**
     * State of the action on the device
     */
    actionState?: ActionState | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Time the action state was last updated
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Time the action was initiated
     */
    startDateTime?: Date | undefined;
}
