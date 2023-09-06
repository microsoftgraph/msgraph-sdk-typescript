import { serializeEntity } from './serializeEntity';
import { type WorkbookFormatProtection } from './workbookFormatProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookFormatProtection(writer: SerializationWriter, workbookFormatProtection: WorkbookFormatProtection | undefined = {} as WorkbookFormatProtection) : void {
        serializeEntity(writer, workbookFormatProtection)
        writer.writeBooleanValue("formulaHidden", workbookFormatProtection.formulaHidden);
        writer.writeBooleanValue("locked", workbookFormatProtection.locked);
}
