import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {ManagedMobileApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedMobileApp;
}
