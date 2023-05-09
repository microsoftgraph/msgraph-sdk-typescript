import {deserializeIntoAssociateWithHubSitesPostRequestBody} from './deserializeIntoAssociateWithHubSitesPostRequestBody';
import {AssociateWithHubSitesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssociateWithHubSitesPostRequestBody;
}
