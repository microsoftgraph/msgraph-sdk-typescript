import {deserializeIntoWorkbookChartPoint} from './deserializeIntoWorkbookChartPoint';
import {WorkbookChartPoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartPoint;
}
