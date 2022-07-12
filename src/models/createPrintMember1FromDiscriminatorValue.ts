import {PrintMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintMember1();
}
