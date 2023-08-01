import type {Call} from './call';
import type {CallRecord} from './callRecords/callRecord';
import {serializeCallRecord} from './callRecords/serializeCallRecord';
import type {CloudCommunications} from './cloudCommunications';
import type {OnlineMeeting} from './onlineMeeting';
import type {Presence} from './presence';
import {serializeCall} from './serializeCall';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializePresence} from './serializePresence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudCommunications(writer: SerializationWriter, cloudCommunications: CloudCommunications | undefined = {} as CloudCommunications) : void {
        writer.writeCollectionOfObjectValues<CallRecord>("callRecords", cloudCommunications.callRecords, serializeCallRecord);
        writer.writeCollectionOfObjectValues<Call>("calls", cloudCommunications.calls, serializeCall);
        writer.writeStringValue("@odata.type", cloudCommunications.odataType);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", cloudCommunications.onlineMeetings, serializeOnlineMeeting);
        writer.writeCollectionOfObjectValues<Presence>("presences", cloudCommunications.presences, serializePresence);
        writer.writeAdditionalData(cloudCommunications.additionalData);
}
