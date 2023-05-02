import {createProvisioningErrorInfoFromDiscriminatorValue} from './createProvisioningErrorInfoFromDiscriminatorValue';
import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {serializeProvisioningErrorInfo} from './serializeProvisioningErrorInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningStatusInfo(provisioningStatusInfo: ProvisioningStatusInfo | undefined = {} as ProvisioningStatusInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "errorInformation": n => { provisioningStatusInfo.errorInformation = n.getObjectValue<ProvisioningErrorInfo>(createProvisioningErrorInfoFromDiscriminatorValue); },
        "@odata.type": n => { provisioningStatusInfo.odataType = n.getStringValue(); },
        "status": n => { provisioningStatusInfo.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
    }
}
