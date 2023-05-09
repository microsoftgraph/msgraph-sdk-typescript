import {ColumnDefinition} from './columnDefinition';
import {ContentTypeInfo} from './contentTypeInfo';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSet(documentSet: DocumentSet | undefined = {} as DocumentSet) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedContentTypes": n => { documentSet.allowedContentTypes = n.getCollectionOfObjectValues<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
        "defaultContents": n => { documentSet.defaultContents = n.getCollectionOfObjectValues<DocumentSetContent>(createDocumentSetContentFromDiscriminatorValue); },
        "@odata.type": n => { documentSet.odataType = n.getStringValue(); },
        "propagateWelcomePageChanges": n => { documentSet.propagateWelcomePageChanges = n.getBooleanValue(); },
        "sharedColumns": n => { documentSet.sharedColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "shouldPrefixNameToFile": n => { documentSet.shouldPrefixNameToFile = n.getBooleanValue(); },
        "welcomePageColumns": n => { documentSet.welcomePageColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "welcomePageUrl": n => { documentSet.welcomePageUrl = n.getStringValue(); },
    }
}
