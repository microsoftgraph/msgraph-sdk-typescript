import { type ParentalControlSettings } from './parentalControlSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoParentalControlSettings(parentalControlSettings: ParentalControlSettings | undefined = {} as ParentalControlSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "countriesBlockedForMinors": n => { parentalControlSettings.countriesBlockedForMinors = n.getCollectionOfPrimitiveValues<string>(); },
        "legalAgeGroupRule": n => { parentalControlSettings.legalAgeGroupRule = n.getStringValue(); },
        "@odata.type": n => { parentalControlSettings.odataType = n.getStringValue(); },
    }
}
