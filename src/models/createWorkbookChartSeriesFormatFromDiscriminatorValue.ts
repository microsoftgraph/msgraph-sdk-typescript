import {WorkbookChartSeriesFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartSeriesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartSeriesFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartSeriesFormatImpl();
}
