import { type BaseItem } from './baseItem';
import { type ColumnDefinition } from './columnDefinition';
import { type ContentType } from './contentType';
import { createBaseItemFromDiscriminatorValue } from './createBaseItemFromDiscriminatorValue';
import { createColumnDefinitionFromDiscriminatorValue } from './createColumnDefinitionFromDiscriminatorValue';
import { createContentTypeFromDiscriminatorValue } from './createContentTypeFromDiscriminatorValue';
import { createDriveFromDiscriminatorValue } from './createDriveFromDiscriminatorValue';
import { createItemAnalyticsFromDiscriminatorValue } from './createItemAnalyticsFromDiscriminatorValue';
import { createListFromDiscriminatorValue } from './createListFromDiscriminatorValue';
import { createOnenoteFromDiscriminatorValue } from './createOnenoteFromDiscriminatorValue';
import { createPermissionFromDiscriminatorValue } from './createPermissionFromDiscriminatorValue';
import { createPublicErrorFromDiscriminatorValue } from './createPublicErrorFromDiscriminatorValue';
import { createRichLongRunningOperationFromDiscriminatorValue } from './createRichLongRunningOperationFromDiscriminatorValue';
import { createRootFromDiscriminatorValue } from './createRootFromDiscriminatorValue';
import { createSharepointIdsFromDiscriminatorValue } from './createSharepointIdsFromDiscriminatorValue';
import { createSiteCollectionFromDiscriminatorValue } from './createSiteCollectionFromDiscriminatorValue';
import { createSiteFromDiscriminatorValue } from './createSiteFromDiscriminatorValue';
import { deserializeIntoBaseItem } from './deserializeIntoBaseItem';
import { type Drive } from './drive';
import { type ItemAnalytics } from './itemAnalytics';
import { type List } from './list';
import { type Onenote } from './onenote';
import { type Permission } from './permission';
import { type PublicError } from './publicError';
import { type RichLongRunningOperation } from './richLongRunningOperation';
import { type Root } from './root';
import { serializeBaseItem } from './serializeBaseItem';
import { serializeColumnDefinition } from './serializeColumnDefinition';
import { serializeContentType } from './serializeContentType';
import { serializeDrive } from './serializeDrive';
import { serializeItemAnalytics } from './serializeItemAnalytics';
import { serializeList } from './serializeList';
import { serializeOnenote } from './serializeOnenote';
import { serializePermission } from './serializePermission';
import { serializePublicError } from './serializePublicError';
import { serializeRichLongRunningOperation } from './serializeRichLongRunningOperation';
import { serializeRoot } from './serializeRoot';
import { serializeSharepointIds } from './serializeSharepointIds';
import { serializeSite } from './serializeSite';
import { serializeSiteCollection } from './serializeSiteCollection';
import { type SharepointIds } from './sharepointIds';
import { type Site } from './site';
import { type SiteCollection } from './siteCollection';
import { createStoreFromDiscriminatorValue } from './termStore/createStoreFromDiscriminatorValue';
import { serializeStore } from './termStore/serializeStore';
import { type Store } from './termStore/store';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSite(site: Site | undefined = {} as Site) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(site),
        "analytics": n => { site.analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); },
        "columns": n => { site.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "contentTypes": n => { site.contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
        "displayName": n => { site.displayName = n.getStringValue(); },
        "drive": n => { site.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
        "drives": n => { site.drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
        "error": n => { site.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "externalColumns": n => { site.externalColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "items": n => { site.items = n.getCollectionOfObjectValues<BaseItem>(createBaseItemFromDiscriminatorValue); },
        "lists": n => { site.lists = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
        "onenote": n => { site.onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); },
        "operations": n => { site.operations = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
        "permissions": n => { site.permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
        "root": n => { site.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
        "sharepointIds": n => { site.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "siteCollection": n => { site.siteCollection = n.getObjectValue<SiteCollection>(createSiteCollectionFromDiscriminatorValue); },
        "sites": n => { site.sites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
        "termStore": n => { site.termStore = n.getObjectValue<Store>(createStoreFromDiscriminatorValue); },
        "termStores": n => { site.termStores = n.getCollectionOfObjectValues<Store>(createStoreFromDiscriminatorValue); },
    }
}
