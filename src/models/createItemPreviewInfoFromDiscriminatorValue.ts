import {deserializeIntoItemPreviewInfo} from './deserializeIntoItemPreviewInfo';
import {ItemPreviewInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemPreviewInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemPreviewInfo;
}
