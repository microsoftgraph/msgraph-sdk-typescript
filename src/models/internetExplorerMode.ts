import { type BrowserSiteList } from './browserSiteList';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface InternetExplorerMode extends Entity, Parsable {
    /**
     * A collection of site lists to support Internet Explorer mode.
     */
    siteLists?: BrowserSiteList[] | undefined;
}
