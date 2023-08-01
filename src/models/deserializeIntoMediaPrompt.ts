import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {deserializeIntoPrompt} from './deserializeIntoPrompt';
import type {MediaInfo} from './mediaInfo';
import type {MediaPrompt} from './mediaPrompt';
import {serializeMediaInfo} from './serializeMediaInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaPrompt(mediaPrompt: MediaPrompt | undefined = {} as MediaPrompt) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrompt(mediaPrompt),
        "mediaInfo": n => { mediaPrompt.mediaInfo = n.getObjectValue<MediaInfo>(createMediaInfoFromDiscriminatorValue); },
    }
}
