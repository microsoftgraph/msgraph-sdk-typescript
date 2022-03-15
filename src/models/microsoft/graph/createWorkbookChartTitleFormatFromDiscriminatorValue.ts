import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartTitleFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartTitleFormat();
}
