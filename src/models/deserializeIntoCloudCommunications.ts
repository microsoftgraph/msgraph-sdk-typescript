import { type Call } from './call';
import { type CallRecord } from './callRecords/callRecord';
import { createCallRecordFromDiscriminatorValue } from './callRecords/createCallRecordFromDiscriminatorValue';
import { serializeCallRecord } from './callRecords/serializeCallRecord';
import { type CloudCommunications } from './cloudCommunications';
import { createCallFromDiscriminatorValue } from './createCallFromDiscriminatorValue';
import { createOnlineMeetingFromDiscriminatorValue } from './createOnlineMeetingFromDiscriminatorValue';
import { createPresenceFromDiscriminatorValue } from './createPresenceFromDiscriminatorValue';
import { type OnlineMeeting } from './onlineMeeting';
import { type Presence } from './presence';
import { serializeCall } from './serializeCall';
import { serializeOnlineMeeting } from './serializeOnlineMeeting';
import { serializePresence } from './serializePresence';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudCommunications(cloudCommunications: CloudCommunications | undefined = {} as CloudCommunications) : Record<string, (node: ParseNode) => void> {
    return {
        "callRecords": n => { cloudCommunications.callRecords = n.getCollectionOfObjectValues<CallRecord>(createCallRecordFromDiscriminatorValue); },
        "calls": n => { cloudCommunications.calls = n.getCollectionOfObjectValues<Call>(createCallFromDiscriminatorValue); },
        "@odata.type": n => { cloudCommunications.odataType = n.getStringValue(); },
        "onlineMeetings": n => { cloudCommunications.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
        "presences": n => { cloudCommunications.presences = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
