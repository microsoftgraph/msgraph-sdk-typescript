import { SearchContent } from './searchContent';
import { type SharePointOneDriveOptions } from './sharePointOneDriveOptions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharePointOneDriveOptions(writer: SerializationWriter, sharePointOneDriveOptions: SharePointOneDriveOptions | undefined = {} as SharePointOneDriveOptions) : void {
        writer.writeEnumValue<SearchContent>("includeContent", sharePointOneDriveOptions.includeContent);
        writer.writeStringValue("@odata.type", sharePointOneDriveOptions.odataType);
        writer.writeAdditionalData(sharePointOneDriveOptions.additionalData);
}
