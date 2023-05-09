import {ContentTypeInfo} from './contentTypeInfo';
import {DocumentSetVersion} from './documentSetVersion';
import {DriveItem} from './driveItem';
import {FieldValueSet} from './fieldValueSet';
import {ItemAnalytics} from './itemAnalytics';
import {ListItem} from './listItem';
import {ListItemVersion} from './listItemVersion';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {serializeItemAnalytics} from './serializeItemAnalytics';
import {serializeListItemVersion} from './serializeListItemVersion';
import {serializeSharepointIds} from './serializeSharepointIds';
import {SharepointIds} from './sharepointIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItem(writer: SerializationWriter, listItem: ListItem | undefined = {} as ListItem) : void {
        serializeBaseItem(writer, listItem)
        writer.writeObjectValue<ItemAnalytics>("analytics", listItem.analytics, serializeItemAnalytics);
        writer.writeObjectValue<ContentTypeInfo>("contentType", listItem.contentType, serializeContentTypeInfo);
        writer.writeCollectionOfObjectValues<DocumentSetVersion>("documentSetVersions", listItem.documentSetVersions, serializeDocumentSetVersion);
        writer.writeObjectValue<DriveItem>("driveItem", listItem.driveItem, serializeDriveItem);
        writer.writeObjectValue<FieldValueSet>("fields", listItem.fields, serializeFieldValueSet);
        writer.writeObjectValue<SharepointIds>("sharepointIds", listItem.sharepointIds, serializeSharepointIds);
        writer.writeCollectionOfObjectValues<ListItemVersion>("versions", listItem.versions, serializeListItemVersion);
}
