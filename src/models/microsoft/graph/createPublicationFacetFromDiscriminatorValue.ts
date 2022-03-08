import {PublicationFacet} from './publicationFacet';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicationFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicationFacet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicationFacet();
}
