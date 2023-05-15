import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhysicalAddress(physicalAddress: PhysicalAddress | undefined = {} as PhysicalAddress) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { physicalAddress.city = n.getStringValue(); },
        "countryOrRegion": n => { physicalAddress.countryOrRegion = n.getStringValue(); },
        "@odata.type": n => { physicalAddress.odataType = n.getStringValue(); },
        "postalCode": n => { physicalAddress.postalCode = n.getStringValue(); },
        "state": n => { physicalAddress.state = n.getStringValue(); },
        "street": n => { physicalAddress.street = n.getStringValue(); },
    }
}
