import type {WorkbookSessionInfo} from './workbookSessionInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookSessionInfo(workbookSessionInfo: WorkbookSessionInfo | undefined = {} as WorkbookSessionInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { workbookSessionInfo.id = n.getStringValue(); },
        "@odata.type": n => { workbookSessionInfo.odataType = n.getStringValue(); },
        "persistChanges": n => { workbookSessionInfo.persistChanges = n.getBooleanValue(); },
    }
}
