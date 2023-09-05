import { deserializeIntoWorkbookRangeFormat } from './deserializeIntoWorkbookRangeFormat';
import { type WorkbookRangeFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeFormat;
}
