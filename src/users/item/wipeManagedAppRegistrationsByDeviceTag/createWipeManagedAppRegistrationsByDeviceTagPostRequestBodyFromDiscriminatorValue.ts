import {deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeManagedAppRegistrationsByDeviceTagPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody;
}
