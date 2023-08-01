import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {WorkbookFunctions} from './workbookFunctions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFunctions(workbookFunctions: WorkbookFunctions | undefined = {} as WorkbookFunctions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFunctions),
    }
}
