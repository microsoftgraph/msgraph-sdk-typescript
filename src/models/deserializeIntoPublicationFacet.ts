import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import type {IdentitySet} from './identitySet';
import type {PublicationFacet} from './publicationFacet';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicationFacet(publicationFacet: PublicationFacet | undefined = {} as PublicationFacet) : Record<string, (node: ParseNode) => void> {
    return {
        "checkedOutBy": n => { publicationFacet.checkedOutBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "level": n => { publicationFacet.level = n.getStringValue(); },
        "@odata.type": n => { publicationFacet.odataType = n.getStringValue(); },
        "versionId": n => { publicationFacet.versionId = n.getStringValue(); },
    }
}
