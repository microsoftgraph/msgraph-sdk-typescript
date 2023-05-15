import {deserializeIntoWorkbookRangeView} from './deserializeIntoWorkbookRangeView';
import {WorkbookRangeView} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeViewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeView;
}
