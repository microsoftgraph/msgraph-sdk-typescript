import { deserializeIntoBrowserSiteHistory } from './deserializeIntoBrowserSiteHistory';
import { type BrowserSiteHistory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSiteHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteHistory;
}
