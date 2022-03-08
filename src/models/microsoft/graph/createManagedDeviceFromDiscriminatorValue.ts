import {ManagedDevice} from './managedDevice';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDevice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDevice();
}
