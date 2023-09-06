import { deserializeIntoBrowserSite } from './deserializeIntoBrowserSite';
import { type BrowserSite } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSiteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSite;
}
