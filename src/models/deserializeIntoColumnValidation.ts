import {ColumnValidation} from './columnValidation';
import {createDisplayNameLocalizationFromDiscriminatorValue} from './createDisplayNameLocalizationFromDiscriminatorValue';
import {DisplayNameLocalization} from './displayNameLocalization';
import {serializeDisplayNameLocalization} from './serializeDisplayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnValidation(columnValidation: ColumnValidation | undefined = {} as ColumnValidation) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultLanguage": n => { columnValidation.defaultLanguage = n.getStringValue(); },
        "descriptions": n => { columnValidation.descriptions = n.getCollectionOfObjectValues<DisplayNameLocalization>(createDisplayNameLocalizationFromDiscriminatorValue); },
        "formula": n => { columnValidation.formula = n.getStringValue(); },
        "@odata.type": n => { columnValidation.odataType = n.getStringValue(); },
    }
}
