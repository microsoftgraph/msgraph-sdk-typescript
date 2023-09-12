import { deserializeIntoWorkbookChartTitle } from './deserializeIntoWorkbookChartTitle';
import { type WorkbookChartTitle } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookChartTitleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartTitle;
}
