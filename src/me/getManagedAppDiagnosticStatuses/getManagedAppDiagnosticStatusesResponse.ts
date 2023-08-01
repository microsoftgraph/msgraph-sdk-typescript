import type {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import type {ManagedAppDiagnosticStatus} from '../../models/managedAppDiagnosticStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetManagedAppDiagnosticStatusesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppDiagnosticStatus[] | undefined;
}
