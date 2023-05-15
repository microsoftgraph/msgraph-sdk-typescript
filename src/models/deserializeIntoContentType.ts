import {ColumnDefinition} from './columnDefinition';
import {ColumnLink} from './columnLink';
import {ContentType} from './contentType';
import {ContentTypeOrder} from './contentTypeOrder';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createColumnLinkFromDiscriminatorValue} from './createColumnLinkFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createContentTypeOrderFromDiscriminatorValue} from './createContentTypeOrderFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {createDocumentSetFromDiscriminatorValue} from './createDocumentSetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {ItemReference} from './itemReference';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeColumnLink} from './serializeColumnLink';
import {serializeContentType} from './serializeContentType';
import {serializeContentTypeOrder} from './serializeContentTypeOrder';
import {serializeDocumentSet} from './serializeDocumentSet';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {serializeItemReference} from './serializeItemReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentType(contentType: ContentType | undefined = {} as ContentType) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contentType),
        "associatedHubsUrls": n => { contentType.associatedHubsUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "base": n => { contentType.base = n.getObjectValue<ContentType>(createContentTypeFromDiscriminatorValue); },
        "baseTypes": n => { contentType.baseTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
        "columnLinks": n => { contentType.columnLinks = n.getCollectionOfObjectValues<ColumnLink>(createColumnLinkFromDiscriminatorValue); },
        "columnPositions": n => { contentType.columnPositions = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "columns": n => { contentType.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "description": n => { contentType.description = n.getStringValue(); },
        "documentSet": n => { contentType.documentSet = n.getObjectValue<DocumentSet>(createDocumentSetFromDiscriminatorValue); },
        "documentTemplate": n => { contentType.documentTemplate = n.getObjectValue<DocumentSetContent>(createDocumentSetContentFromDiscriminatorValue); },
        "group": n => { contentType.group = n.getStringValue(); },
        "hidden": n => { contentType.hidden = n.getBooleanValue(); },
        "inheritedFrom": n => { contentType.inheritedFrom = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
        "isBuiltIn": n => { contentType.isBuiltIn = n.getBooleanValue(); },
        "name": n => { contentType.name = n.getStringValue(); },
        "order": n => { contentType.order = n.getObjectValue<ContentTypeOrder>(createContentTypeOrderFromDiscriminatorValue); },
        "parentId": n => { contentType.parentId = n.getStringValue(); },
        "propagateChanges": n => { contentType.propagateChanges = n.getBooleanValue(); },
        "readOnly": n => { contentType.readOnly = n.getBooleanValue(); },
        "sealed": n => { contentType.sealed = n.getBooleanValue(); },
    }
}
