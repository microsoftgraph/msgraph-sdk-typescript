import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {ManagedDevice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDevice;
}
