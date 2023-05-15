import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeBorder(workbookRangeBorder: WorkbookRangeBorder | undefined = {} as WorkbookRangeBorder) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeBorder),
        "color": n => { workbookRangeBorder.color = n.getStringValue(); },
        "sideIndex": n => { workbookRangeBorder.sideIndex = n.getStringValue(); },
        "style": n => { workbookRangeBorder.style = n.getStringValue(); },
        "weight": n => { workbookRangeBorder.weight = n.getStringValue(); },
    }
}
