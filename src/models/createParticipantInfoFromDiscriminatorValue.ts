import {deserializeIntoParticipantInfo} from './deserializeIntoParticipantInfo';
import {ParticipantInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantInfo;
}
