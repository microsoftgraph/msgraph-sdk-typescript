import {ListInfo} from './listInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListInfo(listInfo: ListInfo | undefined = {} as ListInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypesEnabled": n => { listInfo.contentTypesEnabled = n.getBooleanValue(); },
        "hidden": n => { listInfo.hidden = n.getBooleanValue(); },
        "@odata.type": n => { listInfo.odataType = n.getStringValue(); },
        "template": n => { listInfo.template = n.getStringValue(); },
    }
}
