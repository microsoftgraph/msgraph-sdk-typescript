import { deserializeIntoParticipantEndpoint } from './deserializeIntoParticipantEndpoint';
import { type ParticipantEndpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParticipantEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantEndpoint;
}
