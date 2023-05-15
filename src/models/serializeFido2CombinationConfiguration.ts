import {Fido2CombinationConfiguration} from './fido2CombinationConfiguration';
import {serializeAuthenticationCombinationConfiguration} from './serializeAuthenticationCombinationConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2CombinationConfiguration(writer: SerializationWriter, fido2CombinationConfiguration: Fido2CombinationConfiguration | undefined = {} as Fido2CombinationConfiguration) : void {
        serializeAuthenticationCombinationConfiguration(writer, fido2CombinationConfiguration)
        writer.writeCollectionOfPrimitiveValues<string>("allowedAAGUIDs", fido2CombinationConfiguration.allowedAAGUIDs);
}
