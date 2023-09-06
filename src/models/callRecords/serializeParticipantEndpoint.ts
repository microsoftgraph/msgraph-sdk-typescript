import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type ParticipantEndpoint } from './participantEndpoint';
import { serializeEndpoint } from './serializeEndpoint';
import { serializeUserFeedback } from './serializeUserFeedback';
import { type UserFeedback } from './userFeedback';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeParticipantEndpoint(writer: SerializationWriter, participantEndpoint: ParticipantEndpoint | undefined = {} as ParticipantEndpoint) : void {
        serializeEndpoint(writer, participantEndpoint)
        writer.writeNumberValue("cpuCoresCount", participantEndpoint.cpuCoresCount);
        writer.writeStringValue("cpuName", participantEndpoint.cpuName);
        writer.writeNumberValue("cpuProcessorSpeedInMhz", participantEndpoint.cpuProcessorSpeedInMhz);
        writer.writeObjectValue<UserFeedback>("feedback", participantEndpoint.feedback, serializeUserFeedback);
        writer.writeObjectValue<IdentitySet>("identity", participantEndpoint.identity, serializeIdentitySet);
        writer.writeStringValue("name", participantEndpoint.name);
}
