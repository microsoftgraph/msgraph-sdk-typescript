import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {PhysicalAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhysicalAddress;
}
