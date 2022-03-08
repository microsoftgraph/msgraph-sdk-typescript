import {AssociateWithHubSitesRequestBody} from './associateWithHubSitesRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociateWithHubSitesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociateWithHubSitesRequestBody();
}
