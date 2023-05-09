import {deserializeIntoWorkbookChartLegendFormat} from './deserializeIntoWorkbookChartLegendFormat';
import {WorkbookChartLegendFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartLegendFormat;
}
