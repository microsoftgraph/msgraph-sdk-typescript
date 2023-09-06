import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookRangeBorder } from './workbookRangeBorder';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeBorder(workbookRangeBorder: WorkbookRangeBorder | undefined = {} as WorkbookRangeBorder) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeBorder),
        "color": n => { workbookRangeBorder.color = n.getStringValue(); },
        "sideIndex": n => { workbookRangeBorder.sideIndex = n.getStringValue(); },
        "style": n => { workbookRangeBorder.style = n.getStringValue(); },
        "weight": n => { workbookRangeBorder.weight = n.getStringValue(); },
    }
}
