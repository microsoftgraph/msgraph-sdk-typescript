import {ParticipantEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantEndpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantEndpoint();
}
