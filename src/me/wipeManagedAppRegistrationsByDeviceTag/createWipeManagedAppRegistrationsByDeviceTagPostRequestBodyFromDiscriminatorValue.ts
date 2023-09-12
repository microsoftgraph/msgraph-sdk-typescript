import { deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody } from './deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import { type WipeManagedAppRegistrationsByDeviceTagPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWipeManagedAppRegistrationsByDeviceTagPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody;
}
