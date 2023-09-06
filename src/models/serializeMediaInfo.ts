import { type MediaInfo } from './mediaInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMediaInfo(writer: SerializationWriter, mediaInfo: MediaInfo | undefined = {} as MediaInfo) : void {
        writer.writeStringValue("@odata.type", mediaInfo.odataType);
        writer.writeStringValue("resourceId", mediaInfo.resourceId);
        writer.writeStringValue("uri", mediaInfo.uri);
        writer.writeAdditionalData(mediaInfo.additionalData);
}
