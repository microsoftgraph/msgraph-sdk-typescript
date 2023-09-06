import { deserializeIntoPrintJobStatus } from './deserializeIntoPrintJobStatus';
import { type PrintJobStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintJobStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintJobStatus;
}
