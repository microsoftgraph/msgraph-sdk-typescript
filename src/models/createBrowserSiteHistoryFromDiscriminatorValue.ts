import {BrowserSiteHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSiteHistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSiteHistory();
}
