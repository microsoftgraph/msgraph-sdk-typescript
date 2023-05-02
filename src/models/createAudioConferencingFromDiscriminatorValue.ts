import {deserializeIntoAudioConferencing} from './deserializeIntoAudioConferencing';
import {AudioConferencing} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioConferencingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAudioConferencing;
}
