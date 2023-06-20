import {CallMediaState} from './callMediaState';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallMediaState(callMediaState: CallMediaState | undefined = {} as CallMediaState, writer: SerializationWriter) : void {
        writer.writeEnumValue<MediaState>("audio", callMediaState.audio);
        writer.writeStringValue("@odata.type", callMediaState.odataType);
        writer.writeAdditionalData(callMediaState.additionalData);
}
