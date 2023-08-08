import {createWorkbookChartGridlinesFormatFromDiscriminatorValue} from './createWorkbookChartGridlinesFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartGridlinesFormat} from './serializeWorkbookChartGridlinesFormat';
import type {WorkbookChartGridlines} from './workbookChartGridlines';
import type {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartGridlines(workbookChartGridlines: WorkbookChartGridlines | undefined = {} as WorkbookChartGridlines) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartGridlines),
        "format": n => { workbookChartGridlines.format = n.getObjectValue<WorkbookChartGridlinesFormat>(createWorkbookChartGridlinesFormatFromDiscriminatorValue); },
        "visible": n => { workbookChartGridlines.visible = n.getBooleanValue(); },
    }
}
