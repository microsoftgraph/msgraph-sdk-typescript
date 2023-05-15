import {AppListItem} from './appListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppListItem(writer: SerializationWriter, appListItem: AppListItem | undefined = {} as AppListItem) : void {
        writer.writeStringValue("appId", appListItem.appId);
        writer.writeStringValue("appStoreUrl", appListItem.appStoreUrl);
        writer.writeStringValue("name", appListItem.name);
        writer.writeStringValue("@odata.type", appListItem.odataType);
        writer.writeStringValue("publisher", appListItem.publisher);
        writer.writeAdditionalData(appListItem.additionalData);
}
