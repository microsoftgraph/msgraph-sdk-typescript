import {ParentalControlSettings} from './parentalControlSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParentalControlSettings(parentalControlSettings: ParentalControlSettings | undefined = {} as ParentalControlSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "countriesBlockedForMinors": n => { parentalControlSettings.countriesBlockedForMinors = n.getCollectionOfPrimitiveValues<string>(); },
        "legalAgeGroupRule": n => { parentalControlSettings.legalAgeGroupRule = n.getStringValue(); },
        "@odata.type": n => { parentalControlSettings.odataType = n.getStringValue(); },
    }
}
