import {WorkbookRangeViewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeViewFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeViewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeViewImpl();
}
