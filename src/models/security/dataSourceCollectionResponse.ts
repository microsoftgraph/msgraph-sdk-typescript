import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {DataSource} from './dataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DataSource[] | undefined;
}
