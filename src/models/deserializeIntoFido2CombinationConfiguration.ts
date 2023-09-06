import { deserializeIntoAuthenticationCombinationConfiguration } from './deserializeIntoAuthenticationCombinationConfiguration';
import { type Fido2CombinationConfiguration } from './fido2CombinationConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2CombinationConfiguration(fido2CombinationConfiguration: Fido2CombinationConfiguration | undefined = {} as Fido2CombinationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationCombinationConfiguration(fido2CombinationConfiguration),
        "allowedAAGUIDs": n => { fido2CombinationConfiguration.allowedAAGUIDs = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
