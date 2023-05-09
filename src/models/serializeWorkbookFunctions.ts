import {serializeEntity} from './serializeEntity';
import {WorkbookFunctions} from './workbookFunctions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctions(writer: SerializationWriter, workbookFunctions: WorkbookFunctions | undefined = {} as WorkbookFunctions) : void {
        serializeEntity(writer, workbookFunctions)
}
