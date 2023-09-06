import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookChartFill } from './workbookChartFill';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartFill(workbookChartFill: WorkbookChartFill | undefined = {} as WorkbookChartFill) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartFill),
    }
}
