import {ContentTypeInfo} from './contentTypeInfo';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDocumentSetVersionFromDiscriminatorValue} from './createDocumentSetVersionFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {DocumentSetVersion} from './documentSetVersion';
import {DriveItem} from './driveItem';
import {FieldValueSet} from './fieldValueSet';
import {ItemAnalytics} from './itemAnalytics';
import {ListItem} from './listItem';
import {ListItemVersion} from './listItemVersion';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {serializeItemAnalytics} from './serializeItemAnalytics';
import {serializeListItemVersion} from './serializeListItemVersion';
import {serializeSharepointIds} from './serializeSharepointIds';
import {SharepointIds} from './sharepointIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItem(listItem: ListItem | undefined = {} as ListItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(listItem),
        "analytics": n => { listItem.analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); },
        "contentType": n => { listItem.contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
        "documentSetVersions": n => { listItem.documentSetVersions = n.getCollectionOfObjectValues<DocumentSetVersion>(createDocumentSetVersionFromDiscriminatorValue); },
        "driveItem": n => { listItem.driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "fields": n => { listItem.fields = n.getObjectValue<FieldValueSet>(createFieldValueSetFromDiscriminatorValue); },
        "sharepointIds": n => { listItem.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "versions": n => { listItem.versions = n.getCollectionOfObjectValues<ListItemVersion>(createListItemVersionFromDiscriminatorValue); },
    }
}
