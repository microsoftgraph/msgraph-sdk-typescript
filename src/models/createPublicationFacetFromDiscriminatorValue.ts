import {PublicationFacetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicationFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicationFacetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicationFacetImpl();
}
