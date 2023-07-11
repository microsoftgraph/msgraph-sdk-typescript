import {ContentFormat} from './contentFormat';
import {FormattedContent} from './formattedContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFormattedContent(writer: SerializationWriter, formattedContent: FormattedContent | undefined = {} as FormattedContent) : void {
        writer.writeStringValue("content", formattedContent.content);
        writer.writeEnumValue<ContentFormat>("format", formattedContent.format);
        writer.writeStringValue("@odata.type", formattedContent.odataType);
        writer.writeAdditionalData(formattedContent.additionalData);
}
