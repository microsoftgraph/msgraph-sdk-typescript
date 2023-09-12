import { type ResultTemplateOption } from './resultTemplateOption';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResultTemplateOption(writer: SerializationWriter, resultTemplateOption: ResultTemplateOption | undefined = {} as ResultTemplateOption) : void {
        writer.writeBooleanValue("enableResultTemplate", resultTemplateOption.enableResultTemplate);
        writer.writeStringValue("@odata.type", resultTemplateOption.odataType);
        writer.writeAdditionalData(resultTemplateOption.additionalData);
}
