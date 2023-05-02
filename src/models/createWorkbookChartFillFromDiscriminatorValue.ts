import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {WorkbookChartFill} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFillFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartFill;
}
