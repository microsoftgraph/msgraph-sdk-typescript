import {VerifiedDomain} from './verifiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifiedDomain(writer: SerializationWriter, verifiedDomain: VerifiedDomain | undefined = {} as VerifiedDomain) : void {
        writer.writeStringValue("capabilities", verifiedDomain.capabilities);
        writer.writeBooleanValue("isDefault", verifiedDomain.isDefault);
        writer.writeBooleanValue("isInitial", verifiedDomain.isInitial);
        writer.writeStringValue("name", verifiedDomain.name);
        writer.writeStringValue("@odata.type", verifiedDomain.odataType);
        writer.writeStringValue("type", verifiedDomain.type);
        writer.writeAdditionalData(verifiedDomain.additionalData);
}
