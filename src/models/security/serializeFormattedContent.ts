import { ContentFormat } from './contentFormat';
import { type FormattedContent } from './formattedContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFormattedContent(writer: SerializationWriter, formattedContent: FormattedContent | undefined = {} as FormattedContent) : void {
        writer.writeStringValue("content", formattedContent.content);
        writer.writeEnumValue<ContentFormat>("format", formattedContent.format);
        writer.writeStringValue("@odata.type", formattedContent.odataType);
        writer.writeAdditionalData(formattedContent.additionalData);
}
