import {AssociateWithHubSitesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociateWithHubSitesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociateWithHubSitesPostRequestBody();
}
