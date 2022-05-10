import {WorkbookChartAxesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxesFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxesImpl();
}
