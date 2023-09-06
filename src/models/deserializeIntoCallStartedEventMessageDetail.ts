import { type CallStartedEventMessageDetail } from './callStartedEventMessageDetail';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { TeamworkCallEventType } from './teamworkCallEventType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCallStartedEventMessageDetail(callStartedEventMessageDetail: CallStartedEventMessageDetail | undefined = {} as CallStartedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callStartedEventMessageDetail),
        "callEventType": n => { callStartedEventMessageDetail.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType); },
        "callId": n => { callStartedEventMessageDetail.callId = n.getStringValue(); },
        "initiator": n => { callStartedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
