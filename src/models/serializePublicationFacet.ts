import {PublicationFacet} from './publicationFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicationFacet(writer: SerializationWriter, publicationFacet: PublicationFacet | undefined = {} as PublicationFacet) : void {
        writer.writeStringValue("level", publicationFacet.level);
        writer.writeStringValue("@odata.type", publicationFacet.odataType);
        writer.writeStringValue("versionId", publicationFacet.versionId);
        writer.writeAdditionalData(publicationFacet.additionalData);
}
