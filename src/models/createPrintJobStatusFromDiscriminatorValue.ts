import {deserializeIntoPrintJobStatus} from './deserializeIntoPrintJobStatus';
import {PrintJobStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintJobStatus;
}
