import { type ColumnDefinition } from './columnDefinition';
import { type ContentTypeInfo } from './contentTypeInfo';
import { type DocumentSet } from './documentSet';
import { type DocumentSetContent } from './documentSetContent';
import { serializeColumnDefinition } from './serializeColumnDefinition';
import { serializeContentTypeInfo } from './serializeContentTypeInfo';
import { serializeDocumentSetContent } from './serializeDocumentSetContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDocumentSet(writer: SerializationWriter, documentSet: DocumentSet | undefined = {} as DocumentSet) : void {
        writer.writeCollectionOfObjectValues<ContentTypeInfo>("allowedContentTypes", documentSet.allowedContentTypes, serializeContentTypeInfo);
        writer.writeCollectionOfObjectValues<DocumentSetContent>("defaultContents", documentSet.defaultContents, serializeDocumentSetContent);
        writer.writeStringValue("@odata.type", documentSet.odataType);
        writer.writeBooleanValue("propagateWelcomePageChanges", documentSet.propagateWelcomePageChanges);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("sharedColumns", documentSet.sharedColumns, serializeColumnDefinition);
        writer.writeBooleanValue("shouldPrefixNameToFile", documentSet.shouldPrefixNameToFile);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("welcomePageColumns", documentSet.welcomePageColumns, serializeColumnDefinition);
        writer.writeStringValue("welcomePageUrl", documentSet.welcomePageUrl);
        writer.writeAdditionalData(documentSet.additionalData);
}
