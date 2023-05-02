import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFormatProtection(workbookFormatProtection: WorkbookFormatProtection | undefined = {} as WorkbookFormatProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFormatProtection),
        "formulaHidden": n => { workbookFormatProtection.formulaHidden = n.getBooleanValue(); },
        "locked": n => { workbookFormatProtection.locked = n.getBooleanValue(); },
    }
}
