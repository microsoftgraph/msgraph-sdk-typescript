import {deserializeIntoImageInfo} from './deserializeIntoImageInfo';
import {ImageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageInfo;
}
