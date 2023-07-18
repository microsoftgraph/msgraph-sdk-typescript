import {IosVppEBook} from './iosVppEBook';
import {serializeManagedEBook} from './serializeManagedEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeIosVppEBook(writer: SerializationWriter, iosVppEBook: IosVppEBook | undefined = {} as IosVppEBook) : void {
        serializeManagedEBook(writer, iosVppEBook)
        writer.writeStringValue("appleId", iosVppEBook.appleId);
        writer.writeCollectionOfPrimitiveValues<string>("genres", iosVppEBook.genres);
        writer.writeStringValue("language", iosVppEBook.language);
        writer.writeStringValue("seller", iosVppEBook.seller);
        writer.writeNumberValue("totalLicenseCount", iosVppEBook.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", iosVppEBook.usedLicenseCount);
        writer.writeStringValue("vppOrganizationName", iosVppEBook.vppOrganizationName);
        writer.writeGuidValue("vppTokenId", iosVppEBook.vppTokenId);
}
