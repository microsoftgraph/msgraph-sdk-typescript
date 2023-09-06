import { deserializeIntoParentalControlSettings } from './deserializeIntoParentalControlSettings';
import { type ParentalControlSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParentalControlSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParentalControlSettings;
}
