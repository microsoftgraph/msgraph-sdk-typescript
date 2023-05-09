import {createDocumentSetVersionItemFromDiscriminatorValue} from './createDocumentSetVersionItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {DocumentSetVersion} from './documentSetVersion';
import {DocumentSetVersionItem} from './documentSetVersionItem';
import {IdentitySet} from './identitySet';
import {serializeDocumentSetVersionItem} from './serializeDocumentSetVersionItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersion(documentSetVersion: DocumentSetVersion | undefined = {} as DocumentSetVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoListItemVersion(documentSetVersion),
        "comment": n => { documentSetVersion.comment = n.getStringValue(); },
        "createdBy": n => { documentSetVersion.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { documentSetVersion.createdDateTime = n.getDateValue(); },
        "items": n => { documentSetVersion.items = n.getCollectionOfObjectValues<DocumentSetVersionItem>(createDocumentSetVersionItemFromDiscriminatorValue); },
        "shouldCaptureMinorVersion": n => { documentSetVersion.shouldCaptureMinorVersion = n.getBooleanValue(); },
    }
}
