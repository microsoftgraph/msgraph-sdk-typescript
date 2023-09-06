import { deserializeIntoWorkbookChartSeriesFormat } from './deserializeIntoWorkbookChartSeriesFormat';
import { type WorkbookChartSeriesFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeriesFormat;
}
