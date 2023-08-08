import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLineFormat(workbookChartLineFormat: WorkbookChartLineFormat | undefined = {} as WorkbookChartLineFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLineFormat),
        "color": n => { workbookChartLineFormat.color = n.getStringValue(); },
    }
}
