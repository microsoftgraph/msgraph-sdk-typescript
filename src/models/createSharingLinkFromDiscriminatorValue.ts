import {SharingLinkImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharingLinkImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharingLinkImpl();
}
