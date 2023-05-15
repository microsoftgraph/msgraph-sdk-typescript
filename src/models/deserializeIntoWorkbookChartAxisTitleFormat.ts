import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisTitleFormat(workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {} as WorkbookChartAxisTitleFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisTitleFormat),
        "font": n => { workbookChartAxisTitleFormat.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
    }
}
