import { createWorkbookChartFillFromDiscriminatorValue } from './createWorkbookChartFillFromDiscriminatorValue';
import { createWorkbookChartFontFromDiscriminatorValue } from './createWorkbookChartFontFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartFill } from './serializeWorkbookChartFill';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { type WorkbookChartFill } from './workbookChartFill';
import { type WorkbookChartFont } from './workbookChartFont';
import { type WorkbookChartLegendFormat } from './workbookChartLegendFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLegendFormat(workbookChartLegendFormat: WorkbookChartLegendFormat | undefined = {} as WorkbookChartLegendFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLegendFormat),
        "fill": n => { workbookChartLegendFormat.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
        "font": n => { workbookChartLegendFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
    }
}
