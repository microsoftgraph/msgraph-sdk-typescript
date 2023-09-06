import { type Fido2CombinationConfiguration } from './fido2CombinationConfiguration';
import { serializeAuthenticationCombinationConfiguration } from './serializeAuthenticationCombinationConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFido2CombinationConfiguration(writer: SerializationWriter, fido2CombinationConfiguration: Fido2CombinationConfiguration | undefined = {} as Fido2CombinationConfiguration) : void {
        serializeAuthenticationCombinationConfiguration(writer, fido2CombinationConfiguration)
        writer.writeCollectionOfPrimitiveValues<string>("allowedAAGUIDs", fido2CombinationConfiguration.allowedAAGUIDs);
}
