import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DirectoryAudit} from './directoryAudit';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryAudit[] | undefined;
}
