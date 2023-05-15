import {deserializeIntoWorkbookChartLegend} from './deserializeIntoWorkbookChartLegend';
import {WorkbookChartLegend} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartLegend;
}
