import { deserializeIntoPhysicalOfficeAddress } from './deserializeIntoPhysicalOfficeAddress';
import { type PhysicalOfficeAddress } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPhysicalOfficeAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhysicalOfficeAddress;
}
