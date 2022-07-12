import {TransferMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransferMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : TransferMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TransferMember1();
}
