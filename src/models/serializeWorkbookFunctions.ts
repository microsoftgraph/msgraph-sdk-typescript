import { serializeEntity } from './serializeEntity';
import { type WorkbookFunctions } from './workbookFunctions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctions(writer: SerializationWriter, workbookFunctions: WorkbookFunctions | undefined = {} as WorkbookFunctions) : void {
        serializeEntity(writer, workbookFunctions)
}
