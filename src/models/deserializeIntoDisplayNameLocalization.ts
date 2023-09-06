import { type DisplayNameLocalization } from './displayNameLocalization';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayNameLocalization(displayNameLocalization: DisplayNameLocalization | undefined = {} as DisplayNameLocalization) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { displayNameLocalization.displayName = n.getStringValue(); },
        "languageTag": n => { displayNameLocalization.languageTag = n.getStringValue(); },
        "@odata.type": n => { displayNameLocalization.odataType = n.getStringValue(); },
    }
}
