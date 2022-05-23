import {WorkbookChartTitleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartTitleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartTitleImpl();
}
