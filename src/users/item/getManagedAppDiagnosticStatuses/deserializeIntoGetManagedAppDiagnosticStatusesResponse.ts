import {createManagedAppDiagnosticStatusFromDiscriminatorValue} from '../../../models/createManagedAppDiagnosticStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {ManagedAppDiagnosticStatus} from '../../../models/managedAppDiagnosticStatus';
import {serializeManagedAppDiagnosticStatus} from '../../../models/serializeManagedAppDiagnosticStatus';
import type {GetManagedAppDiagnosticStatusesResponse} from './getManagedAppDiagnosticStatusesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetManagedAppDiagnosticStatusesResponse(getManagedAppDiagnosticStatusesResponse: GetManagedAppDiagnosticStatusesResponse | undefined = {} as GetManagedAppDiagnosticStatusesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedAppDiagnosticStatusesResponse),
        "value": n => { getManagedAppDiagnosticStatusesResponse.value = n.getCollectionOfObjectValues<ManagedAppDiagnosticStatus>(createManagedAppDiagnosticStatusFromDiscriminatorValue); },
    }
}
