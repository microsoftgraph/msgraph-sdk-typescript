import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookFormatProtection } from './workbookFormatProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFormatProtection(workbookFormatProtection: WorkbookFormatProtection | undefined = {} as WorkbookFormatProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFormatProtection),
        "formulaHidden": n => { workbookFormatProtection.formulaHidden = n.getBooleanValue(); },
        "locked": n => { workbookFormatProtection.locked = n.getBooleanValue(); },
    }
}
