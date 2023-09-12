import { deserializeIntoSharingDetail } from './deserializeIntoSharingDetail';
import { type SharingDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharingDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingDetail;
}
