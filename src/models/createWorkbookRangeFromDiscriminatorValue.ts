import {deserializeIntoWorkbookRange} from './deserializeIntoWorkbookRange';
import {WorkbookRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRange;
}
