import { deserializeIntoManagedDevice } from './deserializeIntoManagedDevice';
import { type ManagedDevice } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDevice;
}
