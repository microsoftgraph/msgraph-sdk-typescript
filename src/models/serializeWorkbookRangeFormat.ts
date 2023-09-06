import { serializeEntity } from './serializeEntity';
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

export function serializeWorkbookRangeFormat(writer: SerializationWriter, workbookRangeFormat: WorkbookRangeFormat | undefined = {} as WorkbookRangeFormat) : void {
        serializeEntity(writer, workbookRangeFormat)
        writer.writeCollectionOfObjectValues<WorkbookRangeBorder>("borders", workbookRangeFormat.borders, serializeWorkbookRangeBorder);
        writer.writeNumberValue("columnWidth", workbookRangeFormat.columnWidth);
        writer.writeObjectValue<WorkbookRangeFill>("fill", workbookRangeFormat.fill, serializeWorkbookRangeFill);
        writer.writeObjectValue<WorkbookRangeFont>("font", workbookRangeFormat.font, serializeWorkbookRangeFont);
        writer.writeStringValue("horizontalAlignment", workbookRangeFormat.horizontalAlignment);
        writer.writeObjectValue<WorkbookFormatProtection>("protection", workbookRangeFormat.protection, serializeWorkbookFormatProtection);
        writer.writeNumberValue("rowHeight", workbookRangeFormat.rowHeight);
        writer.writeStringValue("verticalAlignment", workbookRangeFormat.verticalAlignment);
        writer.writeBooleanValue("wrapText", workbookRangeFormat.wrapText);
}
