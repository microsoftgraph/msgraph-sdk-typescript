import { createWorkbookChartFillFromDiscriminatorValue } from './createWorkbookChartFillFromDiscriminatorValue';
import { createWorkbookChartFontFromDiscriminatorValue } from './createWorkbookChartFontFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartFill } from './serializeWorkbookChartFill';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { type WorkbookChartAreaFormat } from './workbookChartAreaFormat';
import { type WorkbookChartFill } from './workbookChartFill';
import { type WorkbookChartFont } from './workbookChartFont';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAreaFormat(workbookChartAreaFormat: WorkbookChartAreaFormat | undefined = {} as WorkbookChartAreaFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAreaFormat),
        "fill": n => { workbookChartAreaFormat.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
        "font": n => { workbookChartAreaFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
    }
}
