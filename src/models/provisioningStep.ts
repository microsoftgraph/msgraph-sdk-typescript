import {DetailsInfo} from './detailsInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStepType} from './provisioningStepType';

export interface ProvisioningStep{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Summary of what occurred during the step. */
    description?:string | undefined;
    /** Details of what occurred during the step. */
    details?:DetailsInfo | undefined;
    /** Name of the step. */
    name?:string | undefined;
    /** Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue. */
    provisioningStepType?:ProvisioningStepType | undefined;
    /** Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue. */
    status?:ProvisioningResult | undefined;
}
