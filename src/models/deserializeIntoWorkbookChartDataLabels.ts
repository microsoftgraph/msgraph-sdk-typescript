import {createWorkbookChartDataLabelFormatFromDiscriminatorValue} from './createWorkbookChartDataLabelFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartDataLabelFormat} from './serializeWorkbookChartDataLabelFormat';
import {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartDataLabels(workbookChartDataLabels: WorkbookChartDataLabels | undefined = {} as WorkbookChartDataLabels) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartDataLabels),
        "format": n => { workbookChartDataLabels.format = n.getObjectValue<WorkbookChartDataLabelFormat>(createWorkbookChartDataLabelFormatFromDiscriminatorValue); },
        "position": n => { workbookChartDataLabels.position = n.getStringValue(); },
        "separator": n => { workbookChartDataLabels.separator = n.getStringValue(); },
        "showBubbleSize": n => { workbookChartDataLabels.showBubbleSize = n.getBooleanValue(); },
        "showCategoryName": n => { workbookChartDataLabels.showCategoryName = n.getBooleanValue(); },
        "showLegendKey": n => { workbookChartDataLabels.showLegendKey = n.getBooleanValue(); },
        "showPercentage": n => { workbookChartDataLabels.showPercentage = n.getBooleanValue(); },
        "showSeriesName": n => { workbookChartDataLabels.showSeriesName = n.getBooleanValue(); },
        "showValue": n => { workbookChartDataLabels.showValue = n.getBooleanValue(); },
    }
}
