import {WorkbookRangeFont} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFontFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFont {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFont();
}
