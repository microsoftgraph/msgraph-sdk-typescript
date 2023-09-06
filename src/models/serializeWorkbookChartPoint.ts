import { type Json } from './json';
import { serializeEntity } from './serializeEntity';
import { serializeJson } from './serializeJson';
import { serializeWorkbookChartPointFormat } from './serializeWorkbookChartPointFormat';
import { type WorkbookChartPoint } from './workbookChartPoint';
import { type WorkbookChartPointFormat } from './workbookChartPointFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPoint(writer: SerializationWriter, workbookChartPoint: WorkbookChartPoint | undefined = {} as WorkbookChartPoint) : void {
        serializeEntity(writer, workbookChartPoint)
        writer.writeObjectValue<WorkbookChartPointFormat>("format", workbookChartPoint.format, serializeWorkbookChartPointFormat);
        writer.writeObjectValue<Json>("value", workbookChartPoint.value, serializeJson);
}
