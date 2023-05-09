import {LocalizedDescription} from './localizedDescription';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedDescription(localizedDescription: LocalizedDescription | undefined = {} as LocalizedDescription) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { localizedDescription.description = n.getStringValue(); },
        "languageTag": n => { localizedDescription.languageTag = n.getStringValue(); },
        "@odata.type": n => { localizedDescription.odataType = n.getStringValue(); },
    }
}
