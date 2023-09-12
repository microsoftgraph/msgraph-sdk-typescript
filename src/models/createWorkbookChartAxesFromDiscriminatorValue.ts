import { deserializeIntoWorkbookChartAxes } from './deserializeIntoWorkbookChartAxes';
import { type WorkbookChartAxes } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxes;
}
