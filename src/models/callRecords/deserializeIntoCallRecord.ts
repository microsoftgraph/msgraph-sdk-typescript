import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CallRecord} from './callRecord';
import {CallType} from './callType';
import {createSessionFromDiscriminatorValue} from './createSessionFromDiscriminatorValue';
import {Modality} from './modality';
import {serializeSession} from './serializeSession';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecord(callRecord: CallRecord | undefined = {} as CallRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(callRecord),
        "endDateTime": n => { callRecord.endDateTime = n.getDateValue(); },
        "joinWebUrl": n => { callRecord.joinWebUrl = n.getStringValue(); },
        "lastModifiedDateTime": n => { callRecord.lastModifiedDateTime = n.getDateValue(); },
        "modalities": n => { callRecord.modalities = n.getCollectionOfEnumValues<Modality>(Modality); },
        "organizer": n => { callRecord.organizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "participants": n => { callRecord.participants = n.getCollectionOfObjectValues<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "sessions": n => { callRecord.sessions = n.getCollectionOfObjectValues<Session>(createSessionFromDiscriminatorValue); },
        "startDateTime": n => { callRecord.startDateTime = n.getDateValue(); },
        "type": n => { callRecord.type = n.getEnumValue<CallType>(CallType); },
        "version": n => { callRecord.version = n.getNumberValue(); },
    }
}
