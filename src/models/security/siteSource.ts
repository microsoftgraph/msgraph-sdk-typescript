import {Site} from '../site';
import {DataSource} from './dataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSource extends DataSource, Parsable {
    /**
     * The site property
     */
    site?: Site | undefined;
}
