import {AppListItem} from './appListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppListItem(appListItem: AppListItem | undefined = {} as AppListItem) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { appListItem.appId = n.getStringValue(); },
        "appStoreUrl": n => { appListItem.appStoreUrl = n.getStringValue(); },
        "name": n => { appListItem.name = n.getStringValue(); },
        "@odata.type": n => { appListItem.odataType = n.getStringValue(); },
        "publisher": n => { appListItem.publisher = n.getStringValue(); },
    }
}
