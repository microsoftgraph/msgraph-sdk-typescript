import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';

export interface ProvisioningStatusInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The errorInformation property */
    errorInformation?:ProvisioningErrorInfo | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue. */
    status?:ProvisioningResult | undefined;
}
