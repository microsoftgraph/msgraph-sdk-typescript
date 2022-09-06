import {WorkbookRangeView} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeViewFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeView {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeView();
}
