import {deserializeIntoSite} from './deserializeIntoSite';
import {Site} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSite;
}
