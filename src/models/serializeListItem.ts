import { type ContentTypeInfo } from './contentTypeInfo';
import { type DocumentSetVersion } from './documentSetVersion';
import { type DriveItem } from './driveItem';
import { type FieldValueSet } from './fieldValueSet';
import { type ItemAnalytics } from './itemAnalytics';
import { type ListItem } from './listItem';
import { type ListItemVersion } from './listItemVersion';
import { serializeBaseItem } from './serializeBaseItem';
import { serializeContentTypeInfo } from './serializeContentTypeInfo';
import { serializeDocumentSetVersion } from './serializeDocumentSetVersion';
import { serializeDriveItem } from './serializeDriveItem';
import { serializeFieldValueSet } from './serializeFieldValueSet';
import { serializeItemAnalytics } from './serializeItemAnalytics';
import { serializeListItemVersion } from './serializeListItemVersion';
import { serializeSharepointIds } from './serializeSharepointIds';
import { type SharepointIds } from './sharepointIds';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
