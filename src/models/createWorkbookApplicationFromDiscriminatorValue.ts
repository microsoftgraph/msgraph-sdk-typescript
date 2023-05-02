import {deserializeIntoWorkbookApplication} from './deserializeIntoWorkbookApplication';
import {WorkbookApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookApplication;
}
