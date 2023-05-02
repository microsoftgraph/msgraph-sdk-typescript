import {deserializeIntoWorkbookChartTitle} from './deserializeIntoWorkbookChartTitle';
import {WorkbookChartTitle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartTitle;
}
