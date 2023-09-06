import { deserializeIntoManagedAppDiagnosticStatus } from './deserializeIntoManagedAppDiagnosticStatus';
import { type ManagedAppDiagnosticStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppDiagnosticStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppDiagnosticStatus;
}
