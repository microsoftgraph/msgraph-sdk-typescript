import { type Json } from './json';
import { serializeEntity } from './serializeEntity';
import { serializeJson } from './serializeJson';
import { serializeWorkbookChartAxisFormat } from './serializeWorkbookChartAxisFormat';
import { serializeWorkbookChartAxisTitle } from './serializeWorkbookChartAxisTitle';
import { serializeWorkbookChartGridlines } from './serializeWorkbookChartGridlines';
import { type WorkbookChartAxis } from './workbookChartAxis';
import { type WorkbookChartAxisFormat } from './workbookChartAxisFormat';
import { type WorkbookChartAxisTitle } from './workbookChartAxisTitle';
import { type WorkbookChartGridlines } from './workbookChartGridlines';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxis(writer: SerializationWriter, workbookChartAxis: WorkbookChartAxis | undefined = {} as WorkbookChartAxis) : void {
        serializeEntity(writer, workbookChartAxis)
        writer.writeObjectValue<WorkbookChartAxisFormat>("format", workbookChartAxis.format, serializeWorkbookChartAxisFormat);
        writer.writeObjectValue<WorkbookChartGridlines>("majorGridlines", workbookChartAxis.majorGridlines, serializeWorkbookChartGridlines);
        writer.writeObjectValue<Json>("majorUnit", workbookChartAxis.majorUnit, serializeJson);
        writer.writeObjectValue<Json>("maximum", workbookChartAxis.maximum, serializeJson);
        writer.writeObjectValue<Json>("minimum", workbookChartAxis.minimum, serializeJson);
        writer.writeObjectValue<WorkbookChartGridlines>("minorGridlines", workbookChartAxis.minorGridlines, serializeWorkbookChartGridlines);
        writer.writeObjectValue<Json>("minorUnit", workbookChartAxis.minorUnit, serializeJson);
        writer.writeObjectValue<WorkbookChartAxisTitle>("title", workbookChartAxis.title, serializeWorkbookChartAxisTitle);
}
