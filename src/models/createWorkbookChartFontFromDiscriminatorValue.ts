import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartFont} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFontFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartFont;
}
