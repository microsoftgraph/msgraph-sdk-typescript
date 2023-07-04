import {AutonomousSystem} from './autonomousSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutonomousSystem(autonomousSystem: AutonomousSystem | undefined = {} as AutonomousSystem) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { autonomousSystem.name = n.getStringValue(); },
        "number": n => { autonomousSystem.number = n.getNumberValue(); },
        "@odata.type": n => { autonomousSystem.odataType = n.getStringValue(); },
        "organization": n => { autonomousSystem.organization = n.getStringValue(); },
        "value": n => { autonomousSystem.value = n.getStringValue(); },
    }
}
