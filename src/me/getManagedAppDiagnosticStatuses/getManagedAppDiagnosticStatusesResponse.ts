import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {ManagedAppDiagnosticStatus} from '../../models/managedAppDiagnosticStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetManagedAppDiagnosticStatusesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppDiagnosticStatus[] | undefined;
}
