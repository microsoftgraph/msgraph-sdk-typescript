import { deserializeIntoAudio } from './deserializeIntoAudio';
import { type Audio } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAudioFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAudio;
}
