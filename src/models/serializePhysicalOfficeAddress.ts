import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhysicalOfficeAddress(writer: SerializationWriter, physicalOfficeAddress: PhysicalOfficeAddress | undefined = {} as PhysicalOfficeAddress) : void {
        writer.writeStringValue("city", physicalOfficeAddress.city);
        writer.writeStringValue("countryOrRegion", physicalOfficeAddress.countryOrRegion);
        writer.writeStringValue("@odata.type", physicalOfficeAddress.odataType);
        writer.writeStringValue("officeLocation", physicalOfficeAddress.officeLocation);
        writer.writeStringValue("postalCode", physicalOfficeAddress.postalCode);
        writer.writeStringValue("state", physicalOfficeAddress.state);
        writer.writeStringValue("street", physicalOfficeAddress.street);
        writer.writeAdditionalData(physicalOfficeAddress.additionalData);
}
