import { deserializeIntoWorkbookRangeBorder } from './deserializeIntoWorkbookRangeBorder';
import { type WorkbookRangeBorder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeBorderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeBorder;
}
