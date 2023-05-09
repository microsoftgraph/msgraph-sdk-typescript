import {Call} from './call';
import {CallRecord} from './callRecords/callRecord';
import {createCallRecordFromDiscriminatorValue} from './callRecords/createCallRecordFromDiscriminatorValue';
import {serializeCallRecord} from './callRecords/serializeCallRecord';
import {CloudCommunications} from './cloudCommunications';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {OnlineMeeting} from './onlineMeeting';
import {Presence} from './presence';
import {serializeCall} from './serializeCall';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializePresence} from './serializePresence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudCommunications(cloudCommunications: CloudCommunications | undefined = {} as CloudCommunications) : Record<string, (node: ParseNode) => void> {
    return {
        "callRecords": n => { cloudCommunications.callRecords = n.getCollectionOfObjectValues<CallRecord>(createCallRecordFromDiscriminatorValue); },
        "calls": n => { cloudCommunications.calls = n.getCollectionOfObjectValues<Call>(createCallFromDiscriminatorValue); },
        "@odata.type": n => { cloudCommunications.odataType = n.getStringValue(); },
        "onlineMeetings": n => { cloudCommunications.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
        "presences": n => { cloudCommunications.presences = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
