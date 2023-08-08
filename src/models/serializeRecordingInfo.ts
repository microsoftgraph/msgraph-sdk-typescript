import type {IdentitySet} from './identitySet';
import type {RecordingInfo} from './recordingInfo';
import {RecordingStatus} from './recordingStatus';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordingInfo(writer: SerializationWriter, recordingInfo: RecordingInfo | undefined = {} as RecordingInfo) : void {
        writer.writeObjectValue<IdentitySet>("initiator", recordingInfo.initiator, serializeIdentitySet);
        writer.writeStringValue("@odata.type", recordingInfo.odataType);
        writer.writeEnumValue<RecordingStatus>("recordingStatus", recordingInfo.recordingStatus);
        writer.writeAdditionalData(recordingInfo.additionalData);
}
