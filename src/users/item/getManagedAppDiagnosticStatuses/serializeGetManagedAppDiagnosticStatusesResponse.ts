import {ManagedAppDiagnosticStatus} from '../../../models/managedAppDiagnosticStatus';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppDiagnosticStatus} from '../../../models/serializeManagedAppDiagnosticStatus';
import {GetManagedAppDiagnosticStatusesResponse} from './getManagedAppDiagnosticStatusesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedAppDiagnosticStatusesResponse(writer: SerializationWriter, getManagedAppDiagnosticStatusesResponse: GetManagedAppDiagnosticStatusesResponse | undefined = {} as GetManagedAppDiagnosticStatusesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedAppDiagnosticStatusesResponse)
        writer.writeCollectionOfObjectValues<ManagedAppDiagnosticStatus>("value", getManagedAppDiagnosticStatusesResponse.value, serializeManagedAppDiagnosticStatus);
}
