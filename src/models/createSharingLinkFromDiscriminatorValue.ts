import {deserializeIntoSharingLink} from './deserializeIntoSharingLink';
import {SharingLink} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingLink;
}
