import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningStatusInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The errorInformation property */
    errorInformation?: ProvisioningErrorInfo | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue. */
    status?: ProvisioningResult | undefined;
}
