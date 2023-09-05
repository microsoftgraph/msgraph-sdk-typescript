import { deserializeIntoArchivedPrintJob } from './deserializeIntoArchivedPrintJob';
import { type ArchivedPrintJob } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArchivedPrintJobFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArchivedPrintJob;
}
