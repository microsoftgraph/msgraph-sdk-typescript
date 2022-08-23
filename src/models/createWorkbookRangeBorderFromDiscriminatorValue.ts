import {WorkbookRangeBorder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeBorderFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeBorder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeBorder();
}
