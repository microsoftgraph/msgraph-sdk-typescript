import {Bitlocker} from './bitlocker';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bitlocker {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bitlocker();
}
