import {WorkbookChartLineFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLineFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartLineFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartLineFormatImpl();
}
