import { deserializeIntoWorkbookChartFill } from './deserializeIntoWorkbookChartFill';
import { type WorkbookChartFill } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartFillFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartFill;
}
