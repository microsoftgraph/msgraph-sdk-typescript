import { type SearchAlterationOptions } from './searchAlterationOptions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAlterationOptions(searchAlterationOptions: SearchAlterationOptions | undefined = {} as SearchAlterationOptions) : Record<string, (node: ParseNode) => void> {
    return {
        "enableModification": n => { searchAlterationOptions.enableModification = n.getBooleanValue(); },
        "enableSuggestion": n => { searchAlterationOptions.enableSuggestion = n.getBooleanValue(); },
        "@odata.type": n => { searchAlterationOptions.odataType = n.getStringValue(); },
    }
}
