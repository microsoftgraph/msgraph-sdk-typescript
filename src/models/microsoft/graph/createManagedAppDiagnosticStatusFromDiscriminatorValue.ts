import {ManagedAppDiagnosticStatus} from './managedAppDiagnosticStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppDiagnosticStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppDiagnosticStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppDiagnosticStatus();
}
