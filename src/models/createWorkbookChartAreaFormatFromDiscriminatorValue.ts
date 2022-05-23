import {WorkbookChartAreaFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAreaFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAreaFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAreaFormatImpl();
}
