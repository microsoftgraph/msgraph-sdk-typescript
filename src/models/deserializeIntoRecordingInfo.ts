import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {RecordingInfo} from './recordingInfo';
import {RecordingStatus} from './recordingStatus';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordingInfo(recordingInfo: RecordingInfo | undefined = {} as RecordingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "initiator": n => { recordingInfo.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { recordingInfo.odataType = n.getStringValue(); },
        "recordingStatus": n => { recordingInfo.recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus); },
    }
}
