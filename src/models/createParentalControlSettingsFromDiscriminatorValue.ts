import {ParentalControlSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParentalControlSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParentalControlSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParentalControlSettingsImpl();
}
