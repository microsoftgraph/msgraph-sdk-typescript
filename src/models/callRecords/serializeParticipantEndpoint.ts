import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {ParticipantEndpoint} from './participantEndpoint';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeUserFeedback} from './serializeUserFeedback';
import {UserFeedback} from './userFeedback';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantEndpoint(writer: SerializationWriter, participantEndpoint: ParticipantEndpoint | undefined = {} as ParticipantEndpoint) : void {
        serializeEndpoint(writer, participantEndpoint)
        writer.writeNumberValue("cpuCoresCount", participantEndpoint.cpuCoresCount);
        writer.writeStringValue("cpuName", participantEndpoint.cpuName);
        writer.writeNumberValue("cpuProcessorSpeedInMhz", participantEndpoint.cpuProcessorSpeedInMhz);
        writer.writeObjectValue<UserFeedback>("feedback", participantEndpoint.feedback, serializeUserFeedback);
        writer.writeObjectValue<IdentitySet>("identity", participantEndpoint.identity, serializeIdentitySet);
        writer.writeStringValue("name", participantEndpoint.name);
}
