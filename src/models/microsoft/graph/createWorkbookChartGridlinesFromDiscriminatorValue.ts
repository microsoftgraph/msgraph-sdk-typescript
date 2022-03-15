import {WorkbookChartGridlines} from './workbookChartGridlines';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartGridlinesFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartGridlines {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartGridlines();
}
