import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentSettings(mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {} as MobileAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mobileAppAssignmentSettings.odataType = n.getStringValue(); },
    }
}
