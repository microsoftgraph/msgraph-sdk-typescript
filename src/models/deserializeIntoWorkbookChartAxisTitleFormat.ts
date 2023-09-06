import { createWorkbookChartFontFromDiscriminatorValue } from './createWorkbookChartFontFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { type WorkbookChartAxisTitleFormat } from './workbookChartAxisTitleFormat';
import { type WorkbookChartFont } from './workbookChartFont';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisTitleFormat(workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {} as WorkbookChartAxisTitleFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisTitleFormat),
        "font": n => { workbookChartAxisTitleFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
    }
}
