import {PublicationFacet} from './publicationFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicationFacet(publicationFacet: PublicationFacet | undefined = {} as PublicationFacet) : Record<string, (node: ParseNode) => void> {
    return {
        "level": n => { publicationFacet.level = n.getStringValue(); },
        "@odata.type": n => { publicationFacet.odataType = n.getStringValue(); },
        "versionId": n => { publicationFacet.versionId = n.getStringValue(); },
    }
}
