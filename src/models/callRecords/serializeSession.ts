import { serializeEntity } from '../serializeEntity';
import { type Endpoint } from './endpoint';
import { type FailureInfo } from './failureInfo';
import { Modality } from './modality';
import { type Segment } from './segment';
import { serializeEndpoint } from './serializeEndpoint';
import { serializeFailureInfo } from './serializeFailureInfo';
import { serializeSegment } from './serializeSegment';
import { type Session } from './session';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSession(writer: SerializationWriter, session: Session | undefined = {} as Session) : void {
        serializeEntity(writer, session)
        writer.writeObjectValue<Endpoint>("callee", session.callee, serializeEndpoint);
        writer.writeObjectValue<Endpoint>("caller", session.caller, serializeEndpoint);
        writer.writeDateValue("endDateTime", session.endDateTime);
        writer.writeObjectValue<FailureInfo>("failureInfo", session.failureInfo, serializeFailureInfo);
        writer.writeBooleanValue("isTest", session.isTest);
        if(session.modalities)
        writer.writeEnumValue<Modality>("modalities", ...session.modalities);
        writer.writeCollectionOfObjectValues<Segment>("segments", session.segments, serializeSegment);
        writer.writeDateValue("startDateTime", session.startDateTime);
}
