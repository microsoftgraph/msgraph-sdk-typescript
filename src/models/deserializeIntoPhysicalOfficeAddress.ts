import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalOfficeAddress(physicalOfficeAddress: PhysicalOfficeAddress | undefined = {} as PhysicalOfficeAddress) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { physicalOfficeAddress.city = n.getStringValue(); },
        "countryOrRegion": n => { physicalOfficeAddress.countryOrRegion = n.getStringValue(); },
        "@odata.type": n => { physicalOfficeAddress.odataType = n.getStringValue(); },
        "officeLocation": n => { physicalOfficeAddress.officeLocation = n.getStringValue(); },
        "postalCode": n => { physicalOfficeAddress.postalCode = n.getStringValue(); },
        "state": n => { physicalOfficeAddress.state = n.getStringValue(); },
        "street": n => { physicalOfficeAddress.street = n.getStringValue(); },
    }
}
