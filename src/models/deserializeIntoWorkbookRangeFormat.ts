import { createWorkbookFormatProtectionFromDiscriminatorValue } from './createWorkbookFormatProtectionFromDiscriminatorValue';
import { createWorkbookRangeBorderFromDiscriminatorValue } from './createWorkbookRangeBorderFromDiscriminatorValue';
import { createWorkbookRangeFillFromDiscriminatorValue } from './createWorkbookRangeFillFromDiscriminatorValue';
import { createWorkbookRangeFontFromDiscriminatorValue } from './createWorkbookRangeFontFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookFormatProtection } from './serializeWorkbookFormatProtection';
import { serializeWorkbookRangeBorder } from './serializeWorkbookRangeBorder';
import { serializeWorkbookRangeFill } from './serializeWorkbookRangeFill';
import { serializeWorkbookRangeFont } from './serializeWorkbookRangeFont';
import { type WorkbookFormatProtection } from './workbookFormatProtection';
import { type WorkbookRangeBorder } from './workbookRangeBorder';
import { type WorkbookRangeFill } from './workbookRangeFill';
import { type WorkbookRangeFont } from './workbookRangeFont';
import { type WorkbookRangeFormat } from './workbookRangeFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFormat(workbookRangeFormat: WorkbookRangeFormat | undefined = {} as WorkbookRangeFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFormat),
        "borders": n => { workbookRangeFormat.borders = n.getCollectionOfObjectValues<WorkbookRangeBorder>(createWorkbookRangeBorderFromDiscriminatorValue); },
        "columnWidth": n => { workbookRangeFormat.columnWidth = n.getNumberValue(); },
        "fill": n => { workbookRangeFormat.fill = n.getObjectValue<WorkbookRangeFill>(createWorkbookRangeFillFromDiscriminatorValue); },
        "font": n => { workbookRangeFormat.font = n.getObjectValue<WorkbookRangeFont>(createWorkbookRangeFontFromDiscriminatorValue); },
        "horizontalAlignment": n => { workbookRangeFormat.horizontalAlignment = n.getStringValue(); },
        "protection": n => { workbookRangeFormat.protection = n.getObjectValue<WorkbookFormatProtection>(createWorkbookFormatProtectionFromDiscriminatorValue); },
        "rowHeight": n => { workbookRangeFormat.rowHeight = n.getNumberValue(); },
        "verticalAlignment": n => { workbookRangeFormat.verticalAlignment = n.getStringValue(); },
        "wrapText": n => { workbookRangeFormat.wrapText = n.getBooleanValue(); },
    }
}
