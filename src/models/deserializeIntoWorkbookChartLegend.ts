import { createWorkbookChartLegendFormatFromDiscriminatorValue } from './createWorkbookChartLegendFormatFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartLegendFormat } from './serializeWorkbookChartLegendFormat';
import { type WorkbookChartLegend } from './workbookChartLegend';
import { type WorkbookChartLegendFormat } from './workbookChartLegendFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLegend(workbookChartLegend: WorkbookChartLegend | undefined = {} as WorkbookChartLegend) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLegend),
        "format": n => { workbookChartLegend.format = n.getObjectValue<WorkbookChartLegendFormat>(createWorkbookChartLegendFormatFromDiscriminatorValue); },
        "overlay": n => { workbookChartLegend.overlay = n.getBooleanValue(); },
        "position": n => { workbookChartLegend.position = n.getStringValue(); },
        "visible": n => { workbookChartLegend.visible = n.getBooleanValue(); },
    }
}
