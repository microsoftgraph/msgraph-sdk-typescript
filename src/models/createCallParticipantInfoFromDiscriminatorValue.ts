import {deserializeIntoCallParticipantInfo} from './deserializeIntoCallParticipantInfo';
import {CallParticipantInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallParticipantInfo;
}
