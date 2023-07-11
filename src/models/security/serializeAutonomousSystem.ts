import {AutonomousSystem} from './autonomousSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutonomousSystem(writer: SerializationWriter, autonomousSystem: AutonomousSystem | undefined = {} as AutonomousSystem) : void {
        writer.writeStringValue("name", autonomousSystem.name);
        writer.writeNumberValue("number", autonomousSystem.number);
        writer.writeStringValue("@odata.type", autonomousSystem.odataType);
        writer.writeStringValue("organization", autonomousSystem.organization);
        writer.writeStringValue("value", autonomousSystem.value);
        writer.writeAdditionalData(autonomousSystem.additionalData);
}
