import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DirectoryAudit} from './directoryAudit';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryAudit[] | undefined;
}
