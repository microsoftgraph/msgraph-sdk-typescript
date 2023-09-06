import { type SetMobileDeviceManagementAuthorityResponse } from './setMobileDeviceManagementAuthorityResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetMobileDeviceManagementAuthorityResponse(setMobileDeviceManagementAuthorityResponse: SetMobileDeviceManagementAuthorityResponse | undefined = {} as SetMobileDeviceManagementAuthorityResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { setMobileDeviceManagementAuthorityResponse.value = n.getNumberValue(); },
    }
}
