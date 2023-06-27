import {EventPropagationStatus} from './eventPropagationStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EventPropagationResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the specific location in the workload associated with the event.
     */
    location?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The name of the workload associated with the event.
     */
    serviceName?: string | undefined;
    /**
     * Indicates the status of the event creation request. The possible values are: none, inProcessing, failed, success, unknownFutureValue.
     */
    status?: EventPropagationStatus | undefined;
    /**
     * Additional information about the status of the event creation request.
     */
    statusInformation?: string | undefined;
}
