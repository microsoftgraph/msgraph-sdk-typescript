import {BitlockerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlockerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlockerImpl();
}
