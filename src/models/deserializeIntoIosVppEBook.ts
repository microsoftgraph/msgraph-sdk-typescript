import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {IosVppEBook} from './iosVppEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoIosVppEBook(iosVppEBook: IosVppEBook | undefined = {} as IosVppEBook) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedEBook(iosVppEBook),
        "appleId": n => { iosVppEBook.appleId = n.getStringValue(); },
        "genres": n => { iosVppEBook.genres = n.getCollectionOfPrimitiveValues<string>(); },
        "language": n => { iosVppEBook.language = n.getStringValue(); },
        "seller": n => { iosVppEBook.seller = n.getStringValue(); },
        "totalLicenseCount": n => { iosVppEBook.totalLicenseCount = n.getNumberValue(); },
        "usedLicenseCount": n => { iosVppEBook.usedLicenseCount = n.getNumberValue(); },
        "vppOrganizationName": n => { iosVppEBook.vppOrganizationName = n.getStringValue(); },
        "vppTokenId": n => { iosVppEBook.vppTokenId = n.getGuidValue(); },
    }
}
