import { deserializeIntoAssociateWithHubSitesPostRequestBody } from './deserializeIntoAssociateWithHubSitesPostRequestBody';
import { type AssociateWithHubSitesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssociateWithHubSitesPostRequestBody;
}
