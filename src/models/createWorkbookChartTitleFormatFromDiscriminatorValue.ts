import {deserializeIntoWorkbookChartTitleFormat} from './deserializeIntoWorkbookChartTitleFormat';
import {WorkbookChartTitleFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartTitleFormat;
}
