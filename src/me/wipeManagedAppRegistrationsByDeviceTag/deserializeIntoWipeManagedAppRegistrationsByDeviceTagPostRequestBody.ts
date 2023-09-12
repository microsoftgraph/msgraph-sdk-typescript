import { type WipeManagedAppRegistrationsByDeviceTagPostRequestBody } from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody(wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {} as WipeManagedAppRegistrationsByDeviceTagPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceTag": n => { wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag = n.getStringValue(); },
    }
}
