import {PrintDocumentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintDocumentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintDocumentImpl();
}
