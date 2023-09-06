import { deserializeIntoWorkbookChartPointFormat } from './deserializeIntoWorkbookChartPointFormat';
import { type WorkbookChartPointFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartPointFormat;
}
