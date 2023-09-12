import { deserializeIntoWorkbookChartAreaFormat } from './deserializeIntoWorkbookChartAreaFormat';
import { type WorkbookChartAreaFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartAreaFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAreaFormat;
}
