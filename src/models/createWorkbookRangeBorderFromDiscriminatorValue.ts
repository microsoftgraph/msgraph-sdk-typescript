import {deserializeIntoWorkbookRangeBorder} from './deserializeIntoWorkbookRangeBorder';
import {WorkbookRangeBorder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeBorderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeBorder;
}
