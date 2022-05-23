import {WorkbookChartPointFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartPointFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartPointFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartPointFormatImpl();
}
