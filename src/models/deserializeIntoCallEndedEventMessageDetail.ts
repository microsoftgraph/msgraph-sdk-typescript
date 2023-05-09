import {CallEndedEventMessageDetail} from './callEndedEventMessageDetail';
import {CallParticipantInfo} from './callParticipantInfo';
import {createCallParticipantInfoFromDiscriminatorValue} from './createCallParticipantInfoFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeCallParticipantInfo} from './serializeCallParticipantInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallEndedEventMessageDetail(callEndedEventMessageDetail: CallEndedEventMessageDetail | undefined = {} as CallEndedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callEndedEventMessageDetail),
        "callDuration": n => { callEndedEventMessageDetail.callDuration = n.getDurationValue(); },
        "callEventType": n => { callEndedEventMessageDetail.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType); },
        "callId": n => { callEndedEventMessageDetail.callId = n.getStringValue(); },
        "callParticipants": n => { callEndedEventMessageDetail.callParticipants = n.getCollectionOfObjectValues<CallParticipantInfo>(createCallParticipantInfoFromDiscriminatorValue); },
        "initiator": n => { callEndedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
