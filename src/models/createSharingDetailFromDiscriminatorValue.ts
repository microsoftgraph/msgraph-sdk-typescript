import {deserializeIntoSharingDetail} from './deserializeIntoSharingDetail';
import {SharingDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingDetail;
}
