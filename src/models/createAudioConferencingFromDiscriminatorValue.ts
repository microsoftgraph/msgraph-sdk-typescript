import {AudioConferencingImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioConferencingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioConferencingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioConferencingImpl();
}
