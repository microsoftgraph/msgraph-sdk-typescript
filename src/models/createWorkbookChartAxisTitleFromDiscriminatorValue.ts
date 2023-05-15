import {deserializeIntoWorkbookChartAxisTitle} from './deserializeIntoWorkbookChartAxisTitle';
import {WorkbookChartAxisTitle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisTitle;
}
