import { createDisplayTemplateFromDiscriminatorValue } from './createDisplayTemplateFromDiscriminatorValue';
import { type DisplayTemplate } from './displayTemplate';
import { type SearchSettings } from './searchSettings';
import { serializeDisplayTemplate } from './serializeDisplayTemplate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchSettings(searchSettings: SearchSettings | undefined = {} as SearchSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchSettings.odataType = n.getStringValue(); },
        "searchResultTemplates": n => { searchSettings.searchResultTemplates = n.getCollectionOfObjectValues<DisplayTemplate>(createDisplayTemplateFromDiscriminatorValue); },
    }
}
