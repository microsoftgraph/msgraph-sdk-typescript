import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartPointFormatFromDiscriminatorValue} from './createWorkbookChartPointFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookChartPointFormat} from './serializeWorkbookChartPointFormat';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPoint(workbookChartPoint: WorkbookChartPoint | undefined = {} as WorkbookChartPoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartPoint),
        "format": n => { workbookChartPoint.format = n.getObjectValue<WorkbookChartPointFormat>(createWorkbookChartPointFormatFromDiscriminatorValue); },
        "value": n => { workbookChartPoint.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
