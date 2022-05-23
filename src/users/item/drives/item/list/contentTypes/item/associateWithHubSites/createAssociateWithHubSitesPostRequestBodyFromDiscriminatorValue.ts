import {AssociateWithHubSitesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociateWithHubSitesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociateWithHubSitesPostRequestBodyImpl();
}
