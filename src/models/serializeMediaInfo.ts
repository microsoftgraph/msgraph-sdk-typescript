import {MediaInfo} from './mediaInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaInfo(writer: SerializationWriter, mediaInfo: MediaInfo | undefined = {} as MediaInfo) : void {
        writer.writeStringValue("@odata.type", mediaInfo.odataType);
        writer.writeStringValue("resourceId", mediaInfo.resourceId);
        writer.writeStringValue("uri", mediaInfo.uri);
        writer.writeAdditionalData(mediaInfo.additionalData);
}
