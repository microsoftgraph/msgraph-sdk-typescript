import {WorkbookChartImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartImpl();
}
