import type {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody(writer: SerializationWriter, wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {} as WipeManagedAppRegistrationsByDeviceTagPostRequestBody) : void {
        writer.writeStringValue("deviceTag", wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag);
        writer.writeAdditionalData(wipeManagedAppRegistrationsByDeviceTagPostRequestBody.additionalData);
}
