import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningErrorInfo(provisioningErrorInfo: ProvisioningErrorInfo | undefined = {} as ProvisioningErrorInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDetails": n => { provisioningErrorInfo.additionalDetails = n.getStringValue(); },
        "errorCategory": n => { provisioningErrorInfo.errorCategory = n.getEnumValue<ProvisioningStatusErrorCategory>(ProvisioningStatusErrorCategory); },
        "errorCode": n => { provisioningErrorInfo.errorCode = n.getStringValue(); },
        "@odata.type": n => { provisioningErrorInfo.odataType = n.getStringValue(); },
        "reason": n => { provisioningErrorInfo.reason = n.getStringValue(); },
        "recommendedAction": n => { provisioningErrorInfo.recommendedAction = n.getStringValue(); },
    }
}
