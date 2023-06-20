import {IosVppEBook} from './iosVppEBook';
import {serializeManagedEBook} from './serializeManagedEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBook(iosVppEBook: IosVppEBook | undefined = {} as IosVppEBook, writer: SerializationWriter) : void {
        serializeManagedEBook(writer, iosVppEBook)
        writer.writeStringValue("appleId", iosVppEBook.appleId);
        writer.writeCollectionOfPrimitiveValues<string>("genres", iosVppEBook.genres);
        writer.writeStringValue("language", iosVppEBook.language);
        writer.writeStringValue("seller", iosVppEBook.seller);
        writer.writeNumberValue("totalLicenseCount", iosVppEBook.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", iosVppEBook.usedLicenseCount);
        writer.writeStringValue("vppOrganizationName", iosVppEBook.vppOrganizationName);
        writer.writeStringValue("vppTokenId", iosVppEBook.vppTokenId);
}
