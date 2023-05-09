import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookChartFill} from './workbookChartFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartFill(workbookChartFill: WorkbookChartFill | undefined = {} as WorkbookChartFill) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartFill),
    }
}
