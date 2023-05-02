import {BaseItemVersion} from './baseItemVersion';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {PublicationFacet} from './publicationFacet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePublicationFacet} from './serializePublicationFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItemVersion(baseItemVersion: BaseItemVersion | undefined = {} as BaseItemVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(baseItemVersion),
        "lastModifiedBy": n => { baseItemVersion.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { baseItemVersion.lastModifiedDateTime = n.getDateValue(); },
        "publication": n => { baseItemVersion.publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
    }
}
