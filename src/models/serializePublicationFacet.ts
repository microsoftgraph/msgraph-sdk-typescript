import { type IdentitySet } from './identitySet';
import { type PublicationFacet } from './publicationFacet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePublicationFacet(writer: SerializationWriter, publicationFacet: PublicationFacet | undefined = {} as PublicationFacet) : void {
        writer.writeObjectValue<IdentitySet>("checkedOutBy", publicationFacet.checkedOutBy, serializeIdentitySet);
        writer.writeStringValue("level", publicationFacet.level);
        writer.writeStringValue("@odata.type", publicationFacet.odataType);
        writer.writeStringValue("versionId", publicationFacet.versionId);
        writer.writeAdditionalData(publicationFacet.additionalData);
}
