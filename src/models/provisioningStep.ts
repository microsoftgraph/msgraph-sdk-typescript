import {DetailsInfo} from './detailsInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStepType} from './provisioningStepType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningStep extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Summary of what occurred during the step.
     */
    description?: string | undefined;
    /**
     * Details of what occurred during the step.
     */
    details?: DetailsInfo | undefined;
    /**
     * Name of the step.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.
     */
    provisioningStepType?: ProvisioningStepType | undefined;
    /**
     * Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.
     */
    status?: ProvisioningResult | undefined;
}
