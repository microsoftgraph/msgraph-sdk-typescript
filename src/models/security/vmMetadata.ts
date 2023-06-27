import {VmCloudProvider} from './vmCloudProvider';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VmMetadata extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cloudProvider property
     */
    cloudProvider?: VmCloudProvider | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Unique identifier of the Azure resource.
     */
    resourceId?: string | undefined;
    /**
     * Unique identifier of the Azure subscription the customer tenant belongs to.
     */
    subscriptionId?: string | undefined;
    /**
     * Unique identifier of the virtual machine instance.
     */
    vmId?: string | undefined;
}
