import {createWorkbookChartGridlinesFormatFromDiscriminatorValue} from './createWorkbookChartGridlinesFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartGridlinesFormat} from './serializeWorkbookChartGridlinesFormat';
import {WorkbookChartGridlines} from './workbookChartGridlines';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartGridlines(workbookChartGridlines: WorkbookChartGridlines | undefined = {} as WorkbookChartGridlines) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartGridlines),
        "format": n => { workbookChartGridlines.format = n.getObjectValue<WorkbookChartGridlinesFormat>(createWorkbookChartGridlinesFormatFromDiscriminatorValue); },
        "visible": n => { workbookChartGridlines.visible = n.getBooleanValue(); },
    }
}
