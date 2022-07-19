import {IosManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosManagedAppRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosManagedAppRegistration();
}
