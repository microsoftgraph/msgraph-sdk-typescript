import {deserializeIntoWorkbookRangeFormat} from './deserializeIntoWorkbookRangeFormat';
import {WorkbookRangeFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeFormat;
}
