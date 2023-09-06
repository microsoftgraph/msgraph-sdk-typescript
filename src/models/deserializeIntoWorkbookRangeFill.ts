import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookRangeFill } from './workbookRangeFill';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFill(workbookRangeFill: WorkbookRangeFill | undefined = {} as WorkbookRangeFill) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFill),
        "color": n => { workbookRangeFill.color = n.getStringValue(); },
    }
}
