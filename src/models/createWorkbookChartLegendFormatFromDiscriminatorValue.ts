import { deserializeIntoWorkbookChartLegendFormat } from './deserializeIntoWorkbookChartLegendFormat';
import { type WorkbookChartLegendFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartLegendFormat;
}
