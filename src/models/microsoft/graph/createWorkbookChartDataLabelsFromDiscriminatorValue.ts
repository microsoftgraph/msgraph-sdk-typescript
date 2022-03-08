import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartDataLabelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartDataLabels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartDataLabels();
}
