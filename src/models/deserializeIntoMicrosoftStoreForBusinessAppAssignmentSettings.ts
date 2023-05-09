import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MicrosoftStoreForBusinessAppAssignmentSettings} from './microsoftStoreForBusinessAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings: MicrosoftStoreForBusinessAppAssignmentSettings | undefined = {} as MicrosoftStoreForBusinessAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings),
        "useDeviceContext": n => { microsoftStoreForBusinessAppAssignmentSettings.useDeviceContext = n.getBooleanValue(); },
    }
}
