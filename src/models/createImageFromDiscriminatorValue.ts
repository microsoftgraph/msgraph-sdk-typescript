import {deserializeIntoImage} from './deserializeIntoImage';
import {Image} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImage;
}
