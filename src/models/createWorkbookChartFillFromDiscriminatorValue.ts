import {WorkbookChartFillImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartFillFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartFillImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartFillImpl();
}
