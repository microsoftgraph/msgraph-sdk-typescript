import type {Site} from '../site';
import type {DataSource} from './dataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSource extends DataSource, Parsable {
    /**
     * The site property
     */
    site?: Site | undefined;
}
