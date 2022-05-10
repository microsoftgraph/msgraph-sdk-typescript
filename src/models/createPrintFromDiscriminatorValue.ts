import {PrintImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintImpl();
}
