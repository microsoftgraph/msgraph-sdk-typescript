import { createJsonFromDiscriminatorValue } from './createJsonFromDiscriminatorValue';
import { createWorkbookChartAxisFormatFromDiscriminatorValue } from './createWorkbookChartAxisFormatFromDiscriminatorValue';
import { createWorkbookChartAxisTitleFromDiscriminatorValue } from './createWorkbookChartAxisTitleFromDiscriminatorValue';
import { createWorkbookChartGridlinesFromDiscriminatorValue } from './createWorkbookChartGridlinesFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Json } from './json';
import { serializeJson } from './serializeJson';
import { serializeWorkbookChartAxisFormat } from './serializeWorkbookChartAxisFormat';
import { serializeWorkbookChartAxisTitle } from './serializeWorkbookChartAxisTitle';
import { serializeWorkbookChartGridlines } from './serializeWorkbookChartGridlines';
import { type WorkbookChartAxis } from './workbookChartAxis';
import { type WorkbookChartAxisFormat } from './workbookChartAxisFormat';
import { type WorkbookChartAxisTitle } from './workbookChartAxisTitle';
import { type WorkbookChartGridlines } from './workbookChartGridlines';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxis(workbookChartAxis: WorkbookChartAxis | undefined = {} as WorkbookChartAxis) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxis),
        "format": n => { workbookChartAxis.format = n.getObjectValue<WorkbookChartAxisFormat>(createWorkbookChartAxisFormatFromDiscriminatorValue); },
        "majorGridlines": n => { workbookChartAxis.majorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); },
        "majorUnit": n => { workbookChartAxis.majorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maximum": n => { workbookChartAxis.maximum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "minimum": n => { workbookChartAxis.minimum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "minorGridlines": n => { workbookChartAxis.minorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); },
        "minorUnit": n => { workbookChartAxis.minorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "title": n => { workbookChartAxis.title = n.getObjectValue<WorkbookChartAxisTitle>(createWorkbookChartAxisTitleFromDiscriminatorValue); },
    }
}
