import {WipeManagedAppRegistrationsByDeviceTagPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeManagedAppRegistrationsByDeviceTagPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipeManagedAppRegistrationsByDeviceTagPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipeManagedAppRegistrationsByDeviceTagPostRequestBodyImpl();
}
