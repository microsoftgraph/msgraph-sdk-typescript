import {AuditEvent} from './auditEvent';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuditEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AuditEvent[] | undefined;
}
