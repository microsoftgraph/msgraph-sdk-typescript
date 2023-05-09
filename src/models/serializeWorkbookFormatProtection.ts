import {serializeEntity} from './serializeEntity';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFormatProtection(writer: SerializationWriter, workbookFormatProtection: WorkbookFormatProtection | undefined = {} as WorkbookFormatProtection) : void {
        serializeEntity(writer, workbookFormatProtection)
        writer.writeBooleanValue("formulaHidden", workbookFormatProtection.formulaHidden);
        writer.writeBooleanValue("locked", workbookFormatProtection.locked);
}
