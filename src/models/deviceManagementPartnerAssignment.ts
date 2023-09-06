import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnerAssignment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * User groups targeting for devices to be enrolled through partner.
     */
    target?: DeviceAndAppManagementAssignmentTarget | undefined;
}
