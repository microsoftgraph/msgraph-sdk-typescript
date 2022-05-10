import {WorkbookChartLegendImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartLegendFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartLegendImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartLegendImpl();
}
