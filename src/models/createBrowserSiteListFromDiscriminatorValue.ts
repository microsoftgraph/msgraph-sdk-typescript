import { deserializeIntoBrowserSiteList } from './deserializeIntoBrowserSiteList';
import { type BrowserSiteList } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSiteListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteList;
}
