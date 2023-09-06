import { deserializeIntoSharingLink } from './deserializeIntoSharingLink';
import { type SharingLink } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharingLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingLink;
}
