import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalAddress(writer: SerializationWriter, physicalAddress: PhysicalAddress | undefined = {} as PhysicalAddress) : void {
        writer.writeStringValue("city", physicalAddress.city);
        writer.writeStringValue("countryOrRegion", physicalAddress.countryOrRegion);
        writer.writeStringValue("@odata.type", physicalAddress.odataType);
        writer.writeStringValue("postalCode", physicalAddress.postalCode);
        writer.writeStringValue("state", physicalAddress.state);
        writer.writeStringValue("street", physicalAddress.street);
        writer.writeAdditionalData(physicalAddress.additionalData);
}
