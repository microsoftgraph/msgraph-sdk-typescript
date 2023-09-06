import { type VerifiedDomain } from './verifiedDomain';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVerifiedDomain(writer: SerializationWriter, verifiedDomain: VerifiedDomain | undefined = {} as VerifiedDomain) : void {
        writer.writeStringValue("capabilities", verifiedDomain.capabilities);
        writer.writeBooleanValue("isDefault", verifiedDomain.isDefault);
        writer.writeBooleanValue("isInitial", verifiedDomain.isInitial);
        writer.writeStringValue("name", verifiedDomain.name);
        writer.writeStringValue("@odata.type", verifiedDomain.odataType);
        writer.writeStringValue("type", verifiedDomain.type);
        writer.writeAdditionalData(verifiedDomain.additionalData);
}
