import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody(wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {} as WipeManagedAppRegistrationsByDeviceTagPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceTag": n => { wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag = n.getStringValue(); },
    }
}
