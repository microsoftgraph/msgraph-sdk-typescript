import {EndpointType} from './endpointType';
import {IdentitySet} from './identitySet';
import {ParticipantInfo} from './participantInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantInfo(writer: SerializationWriter, participantInfo: ParticipantInfo | undefined = {} as ParticipantInfo) : void {
        writer.writeStringValue("countryCode", participantInfo.countryCode);
        writer.writeEnumValue<EndpointType>("endpointType", participantInfo.endpointType);
        writer.writeObjectValue<IdentitySet>("identity", participantInfo.identity, serializeIdentitySet);
        writer.writeStringValue("languageId", participantInfo.languageId);
        writer.writeStringValue("@odata.type", participantInfo.odataType);
        writer.writeStringValue("participantId", participantInfo.participantId);
        writer.writeStringValue("region", participantInfo.region);
        writer.writeAdditionalData(participantInfo.additionalData);
}
