import {IdentitySet} from '../identitySet';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CallRecord} from './callRecord';
import {CallType} from './callType';
import {Modality} from './modality';
import {serializeSession} from './serializeSession';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecord(writer: SerializationWriter, callRecord: CallRecord | undefined = {} as CallRecord) : void {
        serializeEntity(writer, callRecord)
        writer.writeDateValue("endDateTime", callRecord.endDateTime);
        writer.writeStringValue("joinWebUrl", callRecord.joinWebUrl);
        writer.writeDateValue("lastModifiedDateTime", callRecord.lastModifiedDateTime);
        if(callRecord.modalities)
        writer.writeEnumValue<Modality>("modalities", ...callRecord.modalities);
        writer.writeObjectValue<IdentitySet>("organizer", callRecord.organizer, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<IdentitySet>("participants", callRecord.participants, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<Session>("sessions", callRecord.sessions, serializeSession);
        writer.writeDateValue("startDateTime", callRecord.startDateTime);
        writer.writeEnumValue<CallType>("type", callRecord.type);
        writer.writeNumberValue("version", callRecord.version);
}
