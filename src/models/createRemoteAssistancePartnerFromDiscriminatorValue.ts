import { deserializeIntoRemoteAssistancePartner } from './deserializeIntoRemoteAssistancePartner';
import { type RemoteAssistancePartner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteAssistancePartner;
}
