import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningStatusInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If status is not success/ skipped details for the error are contained in this.
     */
    errorInformation?: ProvisioningErrorInfo | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Possible values are: success, warning, failure, skipped, unknownFutureValue.
     */
    status?: ProvisioningResult | undefined;
}
