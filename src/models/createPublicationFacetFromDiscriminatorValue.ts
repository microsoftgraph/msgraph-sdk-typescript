import {deserializeIntoPublicationFacet} from './deserializeIntoPublicationFacet';
import {PublicationFacet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicationFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicationFacet;
}
