import { deserializeIntoWorkbookChartFont } from './deserializeIntoWorkbookChartFont';
import { type WorkbookChartFont } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartFontFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartFont;
}
