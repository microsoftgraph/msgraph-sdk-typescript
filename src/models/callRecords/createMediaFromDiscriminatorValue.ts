import {deserializeIntoMedia} from './deserializeIntoMedia';
import {Media} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMedia;
}
