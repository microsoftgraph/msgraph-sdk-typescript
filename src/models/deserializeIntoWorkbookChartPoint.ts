import { createJsonFromDiscriminatorValue } from './createJsonFromDiscriminatorValue';
import { createWorkbookChartPointFormatFromDiscriminatorValue } from './createWorkbookChartPointFormatFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Json } from './json';
import { serializeJson } from './serializeJson';
import { serializeWorkbookChartPointFormat } from './serializeWorkbookChartPointFormat';
import { type WorkbookChartPoint } from './workbookChartPoint';
import { type WorkbookChartPointFormat } from './workbookChartPointFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPoint(workbookChartPoint: WorkbookChartPoint | undefined = {} as WorkbookChartPoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartPoint),
        "format": n => { workbookChartPoint.format = n.getObjectValue<WorkbookChartPointFormat>(createWorkbookChartPointFormatFromDiscriminatorValue); },
        "value": n => { workbookChartPoint.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
