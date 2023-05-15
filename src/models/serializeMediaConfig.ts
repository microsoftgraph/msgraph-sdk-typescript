import {MediaConfig} from './mediaConfig';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaConfig(writer: SerializationWriter, mediaConfig: MediaConfig | undefined = {} as MediaConfig) : void {
        writer.writeStringValue("@odata.type", mediaConfig.odataType);
        writer.writeAdditionalData(mediaConfig.additionalData);
}
