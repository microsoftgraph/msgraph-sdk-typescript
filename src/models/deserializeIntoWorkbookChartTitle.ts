import {createWorkbookChartTitleFormatFromDiscriminatorValue} from './createWorkbookChartTitleFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartTitleFormat} from './serializeWorkbookChartTitleFormat';
import {WorkbookChartTitle} from './workbookChartTitle';
import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartTitle(workbookChartTitle: WorkbookChartTitle | undefined = {} as WorkbookChartTitle) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartTitle),
        "format": n => { workbookChartTitle.format = n.getObjectValue<WorkbookChartTitleFormat>(createWorkbookChartTitleFormatFromDiscriminatorValue); },
        "overlay": n => { workbookChartTitle.overlay = n.getBooleanValue(); },
        "text": n => { workbookChartTitle.text = n.getStringValue(); },
        "visible": n => { workbookChartTitle.visible = n.getBooleanValue(); },
    }
}
