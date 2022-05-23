import {PhysicalAddressImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhysicalAddressImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhysicalAddressImpl();
}
