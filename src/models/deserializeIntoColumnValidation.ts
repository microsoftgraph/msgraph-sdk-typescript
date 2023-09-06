import { type ColumnValidation } from './columnValidation';
import { createDisplayNameLocalizationFromDiscriminatorValue } from './createDisplayNameLocalizationFromDiscriminatorValue';
import { type DisplayNameLocalization } from './displayNameLocalization';
import { serializeDisplayNameLocalization } from './serializeDisplayNameLocalization';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnValidation(columnValidation: ColumnValidation | undefined = {} as ColumnValidation) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultLanguage": n => { columnValidation.defaultLanguage = n.getStringValue(); },
        "descriptions": n => { columnValidation.descriptions = n.getCollectionOfObjectValues<DisplayNameLocalization>(createDisplayNameLocalizationFromDiscriminatorValue); },
        "formula": n => { columnValidation.formula = n.getStringValue(); },
        "@odata.type": n => { columnValidation.odataType = n.getStringValue(); },
    }
}
