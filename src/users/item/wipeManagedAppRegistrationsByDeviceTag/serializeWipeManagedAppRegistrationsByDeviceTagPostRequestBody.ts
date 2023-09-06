import { type WipeManagedAppRegistrationsByDeviceTagPostRequestBody } from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody(writer: SerializationWriter, wipeManagedAppRegistrationsByDeviceTagPostRequestBody: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined = {} as WipeManagedAppRegistrationsByDeviceTagPostRequestBody) : void {
        writer.writeStringValue("deviceTag", wipeManagedAppRegistrationsByDeviceTagPostRequestBody.deviceTag);
        writer.writeAdditionalData(wipeManagedAppRegistrationsByDeviceTagPostRequestBody.additionalData);
}
