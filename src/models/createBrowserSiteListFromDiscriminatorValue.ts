import {BrowserSiteList} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteListFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSiteList {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSiteList();
}
