import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessDevices extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them.
     */
    deviceFilter?: ConditionalAccessFilter | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
