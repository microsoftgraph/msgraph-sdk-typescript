import {AndroidManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppRegistration();
}
