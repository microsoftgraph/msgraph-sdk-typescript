import {createDisplayTemplateFromDiscriminatorValue} from './createDisplayTemplateFromDiscriminatorValue';
import {DisplayTemplate} from './displayTemplate';
import {SearchSettings} from './searchSettings';
import {serializeDisplayTemplate} from './serializeDisplayTemplate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchSettings(searchSettings: SearchSettings | undefined = {} as SearchSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchSettings.odataType = n.getStringValue(); },
        "searchResultTemplates": n => { searchSettings.searchResultTemplates = n.getCollectionOfObjectValues<DisplayTemplate>(createDisplayTemplateFromDiscriminatorValue); },
    }
}
