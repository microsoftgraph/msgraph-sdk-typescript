import {ColumnDefinition} from './columnDefinition';
import {ColumnLink} from './columnLink';
import {ContentType} from './contentType';
import {ContentTypeOrder} from './contentTypeOrder';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {ItemReference} from './itemReference';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeColumnLink} from './serializeColumnLink';
import {serializeContentTypeOrder} from './serializeContentTypeOrder';
import {serializeDocumentSet} from './serializeDocumentSet';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {serializeEntity} from './serializeEntity';
import {serializeItemReference} from './serializeItemReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentType(writer: SerializationWriter, contentType: ContentType | undefined = {} as ContentType) : void {
        serializeEntity(writer, contentType)
        writer.writeCollectionOfPrimitiveValues<string>("associatedHubsUrls", contentType.associatedHubsUrls);
        writer.writeObjectValue<ContentType>("base", contentType.base, serializeContentType);
        writer.writeCollectionOfObjectValues<ContentType>("baseTypes", contentType.baseTypes, serializeContentType);
        writer.writeCollectionOfObjectValues<ColumnLink>("columnLinks", contentType.columnLinks, serializeColumnLink);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columnPositions", contentType.columnPositions, serializeColumnDefinition);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", contentType.columns, serializeColumnDefinition);
        writer.writeStringValue("description", contentType.description);
        writer.writeObjectValue<DocumentSet>("documentSet", contentType.documentSet, serializeDocumentSet);
        writer.writeObjectValue<DocumentSetContent>("documentTemplate", contentType.documentTemplate, serializeDocumentSetContent);
        writer.writeStringValue("group", contentType.group);
        writer.writeBooleanValue("hidden", contentType.hidden);
        writer.writeObjectValue<ItemReference>("inheritedFrom", contentType.inheritedFrom, serializeItemReference);
        writer.writeBooleanValue("isBuiltIn", contentType.isBuiltIn);
        writer.writeStringValue("name", contentType.name);
        writer.writeObjectValue<ContentTypeOrder>("order", contentType.order, serializeContentTypeOrder);
        writer.writeStringValue("parentId", contentType.parentId);
        writer.writeBooleanValue("propagateChanges", contentType.propagateChanges);
        writer.writeBooleanValue("readOnly", contentType.readOnly);
        writer.writeBooleanValue("sealed", contentType.sealed);
}
