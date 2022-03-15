import {Audio} from './audio';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioFromDiscriminatorValue(parseNode: ParseNode | undefined) : Audio {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Audio();
}
