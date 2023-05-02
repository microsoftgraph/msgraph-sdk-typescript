import {deserializeIntoWorkbookChartSeriesFormat} from './deserializeIntoWorkbookChartSeriesFormat';
import {WorkbookChartSeriesFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeriesFormat;
}
