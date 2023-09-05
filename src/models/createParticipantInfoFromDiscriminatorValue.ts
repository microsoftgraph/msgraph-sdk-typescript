import { deserializeIntoParticipantInfo } from './deserializeIntoParticipantInfo';
import { type ParticipantInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantInfo;
}
