import {WorkbookChartTitleFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartTitleFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartTitleFormatImpl();
}
