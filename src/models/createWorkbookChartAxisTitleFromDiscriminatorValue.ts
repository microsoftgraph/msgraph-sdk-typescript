import { deserializeIntoWorkbookChartAxisTitle } from './deserializeIntoWorkbookChartAxisTitle';
import { type WorkbookChartAxisTitle } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisTitle;
}
