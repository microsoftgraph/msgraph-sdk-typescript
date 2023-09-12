import { type SearchAlterationOptions } from './searchAlterationOptions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSearchAlterationOptions(writer: SerializationWriter, searchAlterationOptions: SearchAlterationOptions | undefined = {} as SearchAlterationOptions) : void {
        writer.writeBooleanValue("enableModification", searchAlterationOptions.enableModification);
        writer.writeBooleanValue("enableSuggestion", searchAlterationOptions.enableSuggestion);
        writer.writeStringValue("@odata.type", searchAlterationOptions.odataType);
        writer.writeAdditionalData(searchAlterationOptions.additionalData);
}
