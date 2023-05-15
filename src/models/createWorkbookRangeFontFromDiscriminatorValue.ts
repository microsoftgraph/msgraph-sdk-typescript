import {deserializeIntoWorkbookRangeFont} from './deserializeIntoWorkbookRangeFont';
import {WorkbookRangeFont} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFontFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeFont;
}
