import {WorkbookChartDataLabelsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartDataLabelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartDataLabelsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartDataLabelsImpl();
}
