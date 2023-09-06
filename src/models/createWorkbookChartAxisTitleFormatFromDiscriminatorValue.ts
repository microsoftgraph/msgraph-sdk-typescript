import { deserializeIntoWorkbookChartAxisTitleFormat } from './deserializeIntoWorkbookChartAxisTitleFormat';
import { type WorkbookChartAxisTitleFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisTitleFormat;
}
