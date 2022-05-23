import {WorkbookChartLegendFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartLegendFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartLegendFormatImpl();
}
