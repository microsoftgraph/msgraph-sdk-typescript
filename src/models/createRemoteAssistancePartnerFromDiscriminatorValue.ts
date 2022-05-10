import {RemoteAssistancePartnerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteAssistancePartnerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteAssistancePartnerImpl();
}
