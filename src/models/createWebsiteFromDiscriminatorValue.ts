import {deserializeIntoWebsite} from './deserializeIntoWebsite';
import {Website} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebsiteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWebsite;
}
