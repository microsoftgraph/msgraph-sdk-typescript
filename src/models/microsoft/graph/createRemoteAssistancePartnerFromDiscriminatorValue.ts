import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteAssistancePartner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteAssistancePartner();
}
