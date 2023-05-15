import {LocalizedName} from './localizedName';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedName(localizedName: LocalizedName | undefined = {} as LocalizedName) : Record<string, (node: ParseNode) => void> {
    return {
        "languageTag": n => { localizedName.languageTag = n.getStringValue(); },
        "name": n => { localizedName.name = n.getStringValue(); },
        "@odata.type": n => { localizedName.odataType = n.getStringValue(); },
    }
}
