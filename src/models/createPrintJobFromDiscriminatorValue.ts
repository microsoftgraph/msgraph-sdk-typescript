import {PrintJobImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintJobImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintJobImpl();
}
