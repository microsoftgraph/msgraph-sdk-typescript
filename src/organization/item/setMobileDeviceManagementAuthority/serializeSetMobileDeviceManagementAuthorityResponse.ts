import { type SetMobileDeviceManagementAuthorityResponse } from './setMobileDeviceManagementAuthorityResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetMobileDeviceManagementAuthorityResponse(writer: SerializationWriter, setMobileDeviceManagementAuthorityResponse: SetMobileDeviceManagementAuthorityResponse | undefined = {} as SetMobileDeviceManagementAuthorityResponse) : void {
        writer.writeNumberValue("value", setMobileDeviceManagementAuthorityResponse.value);
        writer.writeAdditionalData(setMobileDeviceManagementAuthorityResponse.additionalData);
}
