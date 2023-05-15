import {deserializeIntoGetManagedAppDiagnosticStatusesResponse} from './deserializeIntoGetManagedAppDiagnosticStatusesResponse';
import {GetManagedAppDiagnosticStatusesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppDiagnosticStatusesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetManagedAppDiagnosticStatusesResponse;
}
