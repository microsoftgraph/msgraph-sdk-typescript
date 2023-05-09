import {serializeEntity} from './serializeEntity';
import {serializeWorkbookFormatProtection} from './serializeWorkbookFormatProtection';
import {serializeWorkbookRangeBorder} from './serializeWorkbookRangeBorder';
import {serializeWorkbookRangeFill} from './serializeWorkbookRangeFill';
import {serializeWorkbookRangeFont} from './serializeWorkbookRangeFont';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {WorkbookRangeFill} from './workbookRangeFill';
import {WorkbookRangeFont} from './workbookRangeFont';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
