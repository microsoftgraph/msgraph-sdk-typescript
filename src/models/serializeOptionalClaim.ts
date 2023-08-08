import type {OptionalClaim} from './optionalClaim';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOptionalClaim(writer: SerializationWriter, optionalClaim: OptionalClaim | undefined = {} as OptionalClaim) : void {
        writer.writeCollectionOfPrimitiveValues<string>("additionalProperties", optionalClaim.additionalProperties);
        writer.writeBooleanValue("essential", optionalClaim.essential);
        writer.writeStringValue("name", optionalClaim.name);
        writer.writeStringValue("@odata.type", optionalClaim.odataType);
        writer.writeStringValue("source", optionalClaim.source);
        writer.writeAdditionalData(optionalClaim.additionalData);
}
