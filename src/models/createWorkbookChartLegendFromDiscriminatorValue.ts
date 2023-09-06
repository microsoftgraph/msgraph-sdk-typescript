import { deserializeIntoWorkbookChartLegend } from './deserializeIntoWorkbookChartLegend';
import { type WorkbookChartLegend } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartLegend;
}
