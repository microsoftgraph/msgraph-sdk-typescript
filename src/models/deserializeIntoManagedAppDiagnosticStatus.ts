import type {ManagedAppDiagnosticStatus} from './managedAppDiagnosticStatus';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppDiagnosticStatus(managedAppDiagnosticStatus: ManagedAppDiagnosticStatus | undefined = {} as ManagedAppDiagnosticStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "mitigationInstruction": n => { managedAppDiagnosticStatus.mitigationInstruction = n.getStringValue(); },
        "@odata.type": n => { managedAppDiagnosticStatus.odataType = n.getStringValue(); },
        "state": n => { managedAppDiagnosticStatus.state = n.getStringValue(); },
        "validationName": n => { managedAppDiagnosticStatus.validationName = n.getStringValue(); },
    }
}
