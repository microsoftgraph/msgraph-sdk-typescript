import {deserializeIntoRemoteAssistancePartnerCollectionResponse} from './deserializeIntoRemoteAssistancePartnerCollectionResponse';
import {RemoteAssistancePartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteAssistancePartnerCollectionResponse;
}
