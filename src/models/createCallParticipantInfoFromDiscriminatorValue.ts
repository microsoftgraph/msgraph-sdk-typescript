import { deserializeIntoCallParticipantInfo } from './deserializeIntoCallParticipantInfo';
import { type CallParticipantInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallParticipantInfo;
}
