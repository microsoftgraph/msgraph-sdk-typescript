import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeFill} from './workbookRangeFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFill(workbookRangeFill: WorkbookRangeFill | undefined = {} as WorkbookRangeFill) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFill),
        "color": n => { workbookRangeFill.color = n.getStringValue(); },
    }
}
