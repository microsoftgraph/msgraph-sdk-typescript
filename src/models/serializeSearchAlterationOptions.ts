import {SearchAlterationOptions} from './searchAlterationOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAlterationOptions(writer: SerializationWriter, searchAlterationOptions: SearchAlterationOptions | undefined = {} as SearchAlterationOptions) : void {
        writer.writeBooleanValue("enableModification", searchAlterationOptions.enableModification);
        writer.writeBooleanValue("enableSuggestion", searchAlterationOptions.enableSuggestion);
        writer.writeStringValue("@odata.type", searchAlterationOptions.odataType);
        writer.writeAdditionalData(searchAlterationOptions.additionalData);
}
