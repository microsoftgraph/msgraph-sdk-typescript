import {deserializeIntoRemoteAssistancePartner} from './deserializeIntoRemoteAssistancePartner';
import {RemoteAssistancePartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteAssistancePartner;
}
