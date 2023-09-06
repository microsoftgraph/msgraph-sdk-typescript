import { type IdentitySet } from '../identitySet';
import { serializeEntity } from '../serializeEntity';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type CallRecord } from './callRecord';
import { CallType } from './callType';
import { Modality } from './modality';
import { serializeSession } from './serializeSession';
import { type Session } from './session';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallRecord(writer: SerializationWriter, callRecord: CallRecord | undefined = {} as CallRecord) : void {
        serializeEntity(writer, callRecord)
        writer.writeDateValue("endDateTime", callRecord.endDateTime);
        writer.writeStringValue("joinWebUrl", callRecord.joinWebUrl);
        writer.writeDateValue("lastModifiedDateTime", callRecord.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<Modality>("modalities", callRecord.modalities, object);
        writer.writeObjectValue<IdentitySet>("organizer", callRecord.organizer, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<IdentitySet>("participants", callRecord.participants, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<Session>("sessions", callRecord.sessions, serializeSession);
        writer.writeDateValue("startDateTime", callRecord.startDateTime);
        writer.writeEnumValue<CallType>("type", callRecord.type);
        writer.writeNumberValue("version", callRecord.version);
}
