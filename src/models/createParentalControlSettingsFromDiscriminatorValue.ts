import {deserializeIntoParentalControlSettings} from './deserializeIntoParentalControlSettings';
import {ParentalControlSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParentalControlSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParentalControlSettings;
}
