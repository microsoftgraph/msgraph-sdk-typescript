import {deserializeIntoParticipantEndpoint} from './deserializeIntoParticipantEndpoint';
import {ParticipantEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantEndpoint;
}
