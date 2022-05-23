import {WorkbookChartGridlinesFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartGridlinesFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartGridlinesFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartGridlinesFormatImpl();
}
