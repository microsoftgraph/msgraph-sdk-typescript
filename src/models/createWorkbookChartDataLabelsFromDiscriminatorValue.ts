import {deserializeIntoWorkbookChartDataLabels} from './deserializeIntoWorkbookChartDataLabels';
import {WorkbookChartDataLabels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartDataLabelsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartDataLabels;
}
