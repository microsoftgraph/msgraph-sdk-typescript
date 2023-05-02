import {deserializeIntoAndroidManagedAppRegistration} from './deserializeIntoAndroidManagedAppRegistration';
import {AndroidManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidManagedAppRegistration;
}
