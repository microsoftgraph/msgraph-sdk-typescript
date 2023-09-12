import { deserializeIntoBitlocker } from './deserializeIntoBitlocker';
import { type Bitlocker } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitlockerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitlocker;
}
