import {deserializeIntoBrowserSite} from './deserializeIntoBrowserSite';
import {BrowserSite} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSite;
}
