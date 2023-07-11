import {DataSource} from './dataSource';
import {DataSourceContainer} from './dataSourceContainer';
import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSource extends DataSourceContainer, Parsable {
    /**
     * User source or SharePoint site data source as non-custodial data source.
     */
    dataSource?: DataSource | undefined;
    /**
     * Operation entity that represents the latest indexing for the non-custodial data source.
     */
    lastIndexOperation?: EdiscoveryIndexOperation | undefined;
}
