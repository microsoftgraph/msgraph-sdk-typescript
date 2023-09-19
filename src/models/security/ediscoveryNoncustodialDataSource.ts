import { type DataSource } from './dataSource';
import { type DataSourceContainer } from './dataSourceContainer';
import { type EdiscoveryIndexOperation } from './ediscoveryIndexOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSource extends DataSourceContainer, Parsable {
    /**
     * User source or SharePoint site data source as noncustodial data source.
     */
    dataSource?: DataSource | undefined;
    /**
     * Operation entity that represents the latest indexing for the noncustodial data source.
     */
    lastIndexOperation?: EdiscoveryIndexOperation | undefined;
}
