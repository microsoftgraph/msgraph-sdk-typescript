import {CallParticipantInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallParticipantInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallParticipantInfoImpl();
}
