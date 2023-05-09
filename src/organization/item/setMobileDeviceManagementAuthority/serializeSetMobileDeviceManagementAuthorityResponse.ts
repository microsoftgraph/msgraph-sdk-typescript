import {SetMobileDeviceManagementAuthorityResponse} from './setMobileDeviceManagementAuthorityResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetMobileDeviceManagementAuthorityResponse(writer: SerializationWriter, setMobileDeviceManagementAuthorityResponse: SetMobileDeviceManagementAuthorityResponse | undefined = {} as SetMobileDeviceManagementAuthorityResponse) : void {
        writer.writeNumberValue("value", setMobileDeviceManagementAuthorityResponse.value);
        writer.writeAdditionalData(setMobileDeviceManagementAuthorityResponse.additionalData);
}
