import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscriptionInfo(writer: SerializationWriter, callTranscriptionInfo: CallTranscriptionInfo | undefined = {} as CallTranscriptionInfo) : void {
        writer.writeDateValue("lastModifiedDateTime", callTranscriptionInfo.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", callTranscriptionInfo.odataType);
        writer.writeEnumValue<CallTranscriptionState>("state", callTranscriptionInfo.state);
        writer.writeAdditionalData(callTranscriptionInfo.additionalData);
}
