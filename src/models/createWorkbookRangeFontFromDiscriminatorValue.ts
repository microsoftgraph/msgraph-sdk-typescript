import { deserializeIntoWorkbookRangeFont } from './deserializeIntoWorkbookRangeFont';
import { type WorkbookRangeFont } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFontFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeFont;
}
