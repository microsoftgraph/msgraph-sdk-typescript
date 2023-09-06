import { type ManagedAppDiagnosticStatus } from './managedAppDiagnosticStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppDiagnosticStatus(writer: SerializationWriter, managedAppDiagnosticStatus: ManagedAppDiagnosticStatus | undefined = {} as ManagedAppDiagnosticStatus) : void {
        writer.writeStringValue("mitigationInstruction", managedAppDiagnosticStatus.mitigationInstruction);
        writer.writeStringValue("@odata.type", managedAppDiagnosticStatus.odataType);
        writer.writeStringValue("state", managedAppDiagnosticStatus.state);
        writer.writeStringValue("validationName", managedAppDiagnosticStatus.validationName);
        writer.writeAdditionalData(managedAppDiagnosticStatus.additionalData);
}
