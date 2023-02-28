import {AzureCommunicationServicesUserConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAzureCommunicationServicesUserConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AzureCommunicationServicesUserConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AzureCommunicationServicesUserConversationMemberCollectionResponse();
}
