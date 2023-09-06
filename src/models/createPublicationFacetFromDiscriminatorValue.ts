import { deserializeIntoPublicationFacet } from './deserializeIntoPublicationFacet';
import { type PublicationFacet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPublicationFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicationFacet;
}
