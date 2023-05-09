import {DisplayNameLocalization} from './displayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayNameLocalization(displayNameLocalization: DisplayNameLocalization | undefined = {} as DisplayNameLocalization) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { displayNameLocalization.displayName = n.getStringValue(); },
        "languageTag": n => { displayNameLocalization.languageTag = n.getStringValue(); },
        "@odata.type": n => { displayNameLocalization.odataType = n.getStringValue(); },
    }
}
