import {ParticipantEndpointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantEndpointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantEndpointImpl();
}
