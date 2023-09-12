import { deserializeIntoWorkbookRangeFill } from './deserializeIntoWorkbookRangeFill';
import { type WorkbookRangeFill } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFillFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeFill;
}
