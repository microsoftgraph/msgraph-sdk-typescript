import {AudioImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioImpl();
}
