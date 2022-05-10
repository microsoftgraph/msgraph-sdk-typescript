import {ManagedAppDiagnosticStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppDiagnosticStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppDiagnosticStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppDiagnosticStatusImpl();
}
