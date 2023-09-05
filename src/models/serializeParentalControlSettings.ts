import { type ParentalControlSettings } from './parentalControlSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeParentalControlSettings(writer: SerializationWriter, parentalControlSettings: ParentalControlSettings | undefined = {} as ParentalControlSettings) : void {
        writer.writeCollectionOfPrimitiveValues<string>("countriesBlockedForMinors", parentalControlSettings.countriesBlockedForMinors);
        writer.writeStringValue("legalAgeGroupRule", parentalControlSettings.legalAgeGroupRule);
        writer.writeStringValue("@odata.type", parentalControlSettings.odataType);
        writer.writeAdditionalData(parentalControlSettings.additionalData);
}
