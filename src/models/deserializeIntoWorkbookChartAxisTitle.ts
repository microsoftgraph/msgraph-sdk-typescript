import {createWorkbookChartAxisTitleFormatFromDiscriminatorValue} from './createWorkbookChartAxisTitleFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartAxisTitleFormat} from './serializeWorkbookChartAxisTitleFormat';
import type {WorkbookChartAxisTitle} from './workbookChartAxisTitle';
import type {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisTitle(workbookChartAxisTitle: WorkbookChartAxisTitle | undefined = {} as WorkbookChartAxisTitle) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisTitle),
        "format": n => { workbookChartAxisTitle.format = n.getObjectValue<WorkbookChartAxisTitleFormat>(createWorkbookChartAxisTitleFormatFromDiscriminatorValue); },
        "text": n => { workbookChartAxisTitle.text = n.getStringValue(); },
        "visible": n => { workbookChartAxisTitle.visible = n.getBooleanValue(); },
    }
}
