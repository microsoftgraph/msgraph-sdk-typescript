import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {serializeProvisioningErrorInfo} from './serializeProvisioningErrorInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningStatusInfo(writer: SerializationWriter, provisioningStatusInfo: ProvisioningStatusInfo | undefined = {} as ProvisioningStatusInfo) : void {
        writer.writeObjectValue<ProvisioningErrorInfo>("errorInformation", provisioningStatusInfo.errorInformation, serializeProvisioningErrorInfo);
        writer.writeStringValue("@odata.type", provisioningStatusInfo.odataType);
        writer.writeEnumValue<ProvisioningResult>("status", provisioningStatusInfo.status);
        writer.writeAdditionalData(provisioningStatusInfo.additionalData);
}
