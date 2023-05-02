import {MediaInfo} from './mediaInfo';
import {MediaPrompt} from './mediaPrompt';
import {serializeMediaInfo} from './serializeMediaInfo';
import {serializePrompt} from './serializePrompt';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaPrompt(writer: SerializationWriter, mediaPrompt: MediaPrompt | undefined = {} as MediaPrompt) : void {
        serializePrompt(writer, mediaPrompt)
        writer.writeObjectValue<MediaInfo>("mediaInfo", mediaPrompt.mediaInfo, serializeMediaInfo);
}
