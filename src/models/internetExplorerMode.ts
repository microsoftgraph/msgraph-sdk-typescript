import {BrowserSiteList} from './browserSiteList';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InternetExplorerMode extends Entity, Parsable {
    /**
     * A collection of site lists to support Internet Explorer mode.
     */
    siteLists?: BrowserSiteList[] | undefined;
}
