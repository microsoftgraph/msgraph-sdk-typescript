import {deserializeIntoWorkbookChart} from './deserializeIntoWorkbookChart';
import {WorkbookChart} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChart;
}
