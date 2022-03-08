import {WorkbookChartTitle} from './workbookChartTitle';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartTitle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartTitle();
}
