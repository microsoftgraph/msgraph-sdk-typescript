import { deserializeIntoWorkbookChartAxisFormat } from './deserializeIntoWorkbookChartAxisFormat';
import { type WorkbookChartAxisFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisFormat;
}
