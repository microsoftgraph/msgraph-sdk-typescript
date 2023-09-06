import { deserializeIntoItemPreviewInfo } from './deserializeIntoItemPreviewInfo';
import { type ItemPreviewInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemPreviewInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemPreviewInfo;
}
