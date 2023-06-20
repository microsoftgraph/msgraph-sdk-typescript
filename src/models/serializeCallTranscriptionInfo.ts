import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscriptionInfo(callTranscriptionInfo: CallTranscriptionInfo | undefined = {} as CallTranscriptionInfo, writer: SerializationWriter) : void {
        writer.writeDateValue("lastModifiedDateTime", callTranscriptionInfo.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", callTranscriptionInfo.odataType);
        writer.writeEnumValue<CallTranscriptionState>("state", callTranscriptionInfo.state);
        writer.writeAdditionalData(callTranscriptionInfo.additionalData);
}
