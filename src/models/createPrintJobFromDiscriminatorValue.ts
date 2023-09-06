import { deserializeIntoPrintJob } from './deserializeIntoPrintJob';
import { type PrintJob } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintJobFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintJob;
}
