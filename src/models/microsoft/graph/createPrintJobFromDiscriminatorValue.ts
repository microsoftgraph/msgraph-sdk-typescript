import {PrintJob} from './printJob';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintJob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintJob();
}
