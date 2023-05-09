import {deserializeIntoIosManagedAppRegistration} from './deserializeIntoIosManagedAppRegistration';
import {IosManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosManagedAppRegistration;
}
