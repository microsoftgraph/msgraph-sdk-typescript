import { deserializeIntoWorkbookRange } from './deserializeIntoWorkbookRange';
import { type WorkbookRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRange;
}
