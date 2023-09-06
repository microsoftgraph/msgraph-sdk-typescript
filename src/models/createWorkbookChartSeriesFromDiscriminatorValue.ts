import { deserializeIntoWorkbookChartSeries } from './deserializeIntoWorkbookChartSeries';
import { type WorkbookChartSeries } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartSeries;
}
