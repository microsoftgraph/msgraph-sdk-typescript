import { deserializeIntoWorkbookChartTitleFormat } from './deserializeIntoWorkbookChartTitleFormat';
import { type WorkbookChartTitleFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartTitleFormat;
}
