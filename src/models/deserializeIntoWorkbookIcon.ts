import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookIcon(workbookIcon: WorkbookIcon | undefined = {} as WorkbookIcon) : Record<string, (node: ParseNode) => void> {
    return {
        "index": n => { workbookIcon.index = n.getNumberValue(); },
        "@odata.type": n => { workbookIcon.odataType = n.getStringValue(); },
        "set": n => { workbookIcon.set = n.getStringValue(); },
    }
}
