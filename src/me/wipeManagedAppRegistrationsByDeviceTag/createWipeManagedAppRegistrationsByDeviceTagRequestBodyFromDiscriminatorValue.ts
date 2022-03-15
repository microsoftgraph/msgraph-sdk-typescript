import {WipeManagedAppRegistrationsByDeviceTagRequestBody} from './wipeManagedAppRegistrationsByDeviceTagRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeManagedAppRegistrationsByDeviceTagRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipeManagedAppRegistrationsByDeviceTagRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipeManagedAppRegistrationsByDeviceTagRequestBody();
}
