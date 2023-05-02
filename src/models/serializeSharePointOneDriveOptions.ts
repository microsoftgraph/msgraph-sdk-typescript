import {SearchContent} from './searchContent';
import {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePointOneDriveOptions(writer: SerializationWriter, sharePointOneDriveOptions: SharePointOneDriveOptions | undefined = {} as SharePointOneDriveOptions) : void {
        writer.writeEnumValue<SearchContent>("includeContent", sharePointOneDriveOptions.includeContent);
        writer.writeStringValue("@odata.type", sharePointOneDriveOptions.odataType);
        writer.writeAdditionalData(sharePointOneDriveOptions.additionalData);
}
