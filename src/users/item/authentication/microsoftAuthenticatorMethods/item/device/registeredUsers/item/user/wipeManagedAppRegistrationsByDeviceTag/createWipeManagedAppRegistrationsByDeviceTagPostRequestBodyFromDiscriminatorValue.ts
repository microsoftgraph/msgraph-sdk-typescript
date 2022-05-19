import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeManagedAppRegistrationsByDeviceTagPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipeManagedAppRegistrationsByDeviceTagPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipeManagedAppRegistrationsByDeviceTagPostRequestBody();
}
