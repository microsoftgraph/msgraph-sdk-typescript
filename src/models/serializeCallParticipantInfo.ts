import {CallParticipantInfo} from './callParticipantInfo';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallParticipantInfo(writer: SerializationWriter, callParticipantInfo: CallParticipantInfo | undefined = {} as CallParticipantInfo) : void {
        writer.writeStringValue("@odata.type", callParticipantInfo.odataType);
        writer.writeObjectValue<IdentitySet>("participant", callParticipantInfo.participant, serializeIdentitySet);
        writer.writeAdditionalData(callParticipantInfo.additionalData);
}
