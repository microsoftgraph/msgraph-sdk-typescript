import { createWorkbookChartFillFromDiscriminatorValue } from './createWorkbookChartFillFromDiscriminatorValue';
import { createWorkbookChartFontFromDiscriminatorValue } from './createWorkbookChartFontFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartFill } from './serializeWorkbookChartFill';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { type WorkbookChartDataLabelFormat } from './workbookChartDataLabelFormat';
import { type WorkbookChartFill } from './workbookChartFill';
import { type WorkbookChartFont } from './workbookChartFont';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartDataLabelFormat(workbookChartDataLabelFormat: WorkbookChartDataLabelFormat | undefined = {} as WorkbookChartDataLabelFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartDataLabelFormat),
        "fill": n => { workbookChartDataLabelFormat.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
        "font": n => { workbookChartDataLabelFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
    }
}
