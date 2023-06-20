import {Call} from './call';
import {CallRecord} from './callRecords/callRecord';
import {serializeCallRecord} from './callRecords/serializeCallRecord';
import {CloudCommunications} from './cloudCommunications';
import {OnlineMeeting} from './onlineMeeting';
import {Presence} from './presence';
import {serializeCall} from './serializeCall';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializePresence} from './serializePresence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudCommunications(cloudCommunications: CloudCommunications | undefined = {} as CloudCommunications, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<CallRecord>("callRecords", cloudCommunications.callRecords, serializeCallRecord);
        writer.writeCollectionOfObjectValues<Call>("calls", cloudCommunications.calls, serializeCall);
        writer.writeStringValue("@odata.type", cloudCommunications.odataType);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", cloudCommunications.onlineMeetings, serializeOnlineMeeting);
        writer.writeCollectionOfObjectValues<Presence>("presences", cloudCommunications.presences, serializePresence);
        writer.writeAdditionalData(cloudCommunications.additionalData);
}
