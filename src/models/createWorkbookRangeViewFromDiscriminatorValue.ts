import { deserializeIntoWorkbookRangeView } from './deserializeIntoWorkbookRangeView';
import { type WorkbookRangeView } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookRangeViewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeView;
}
