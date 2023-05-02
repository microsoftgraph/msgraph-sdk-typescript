import {PrinterLocation} from './printerLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterLocation(printerLocation: PrinterLocation | undefined = {} as PrinterLocation) : Record<string, (node: ParseNode) => void> {
    return {
        "altitudeInMeters": n => { printerLocation.altitudeInMeters = n.getNumberValue(); },
        "building": n => { printerLocation.building = n.getStringValue(); },
        "city": n => { printerLocation.city = n.getStringValue(); },
        "countryOrRegion": n => { printerLocation.countryOrRegion = n.getStringValue(); },
        "floor": n => { printerLocation.floor = n.getStringValue(); },
        "floorDescription": n => { printerLocation.floorDescription = n.getStringValue(); },
        "latitude": n => { printerLocation.latitude = n.getNumberValue(); },
        "longitude": n => { printerLocation.longitude = n.getNumberValue(); },
        "@odata.type": n => { printerLocation.odataType = n.getStringValue(); },
        "organization": n => { printerLocation.organization = n.getCollectionOfPrimitiveValues<string>(); },
        "postalCode": n => { printerLocation.postalCode = n.getStringValue(); },
        "roomDescription": n => { printerLocation.roomDescription = n.getStringValue(); },
        "roomName": n => { printerLocation.roomName = n.getStringValue(); },
        "site": n => { printerLocation.site = n.getStringValue(); },
        "stateOrProvince": n => { printerLocation.stateOrProvince = n.getStringValue(); },
        "streetAddress": n => { printerLocation.streetAddress = n.getStringValue(); },
        "subdivision": n => { printerLocation.subdivision = n.getCollectionOfPrimitiveValues<string>(); },
        "subunit": n => { printerLocation.subunit = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
