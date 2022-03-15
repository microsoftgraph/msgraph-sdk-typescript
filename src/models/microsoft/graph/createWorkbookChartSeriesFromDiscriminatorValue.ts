import {WorkbookChartSeries} from './workbookChartSeries';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartSeries {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartSeries();
}
