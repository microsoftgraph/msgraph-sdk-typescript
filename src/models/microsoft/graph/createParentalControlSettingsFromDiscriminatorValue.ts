import {ParentalControlSettings} from './parentalControlSettings';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParentalControlSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParentalControlSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParentalControlSettings();
}
