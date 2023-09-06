import { type MediaConfig } from './mediaConfig';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMediaConfig(writer: SerializationWriter, mediaConfig: MediaConfig | undefined = {} as MediaConfig) : void {
        writer.writeStringValue("@odata.type", mediaConfig.odataType);
        writer.writeAdditionalData(mediaConfig.additionalData);
}
