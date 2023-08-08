import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import type {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import type {WorkbookChartFont} from './workbookChartFont';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisFormat(workbookChartAxisFormat: WorkbookChartAxisFormat | undefined = {} as WorkbookChartAxisFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisFormat),
        "font": n => { workbookChartAxisFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
        "line": n => { workbookChartAxisFormat.line = n.getObjectValue<WorkbookChartLineFormat>(createWorkbookChartLineFormatFromDiscriminatorValue); },
    }
}
