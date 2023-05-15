import {DisplayTemplate} from './displayTemplate';
import {SearchSettings} from './searchSettings';
import {serializeDisplayTemplate} from './serializeDisplayTemplate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchSettings(writer: SerializationWriter, searchSettings: SearchSettings | undefined = {} as SearchSettings) : void {
        writer.writeStringValue("@odata.type", searchSettings.odataType);
        writer.writeCollectionOfObjectValues<DisplayTemplate>("searchResultTemplates", searchSettings.searchResultTemplates, serializeDisplayTemplate);
        writer.writeAdditionalData(searchSettings.additionalData);
}
