import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookChartPointFormat} from './serializeWorkbookChartPointFormat';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPoint(writer: SerializationWriter, workbookChartPoint: WorkbookChartPoint | undefined = {} as WorkbookChartPoint) : void {
        serializeEntity(writer, workbookChartPoint)
        writer.writeObjectValue<WorkbookChartPointFormat>("format", workbookChartPoint.format, serializeWorkbookChartPointFormat);
        writer.writeObjectValue<Json>("value", workbookChartPoint.value, serializeJson);
}
