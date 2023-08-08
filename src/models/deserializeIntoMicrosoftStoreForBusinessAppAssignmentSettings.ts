import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import type {MicrosoftStoreForBusinessAppAssignmentSettings} from './microsoftStoreForBusinessAppAssignmentSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings: MicrosoftStoreForBusinessAppAssignmentSettings | undefined = {} as MicrosoftStoreForBusinessAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings),
        "useDeviceContext": n => { microsoftStoreForBusinessAppAssignmentSettings.useDeviceContext = n.getBooleanValue(); },
    }
}
