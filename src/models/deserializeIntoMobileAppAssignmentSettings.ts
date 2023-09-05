import { type MobileAppAssignmentSettings } from './mobileAppAssignmentSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentSettings(mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {} as MobileAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mobileAppAssignmentSettings.odataType = n.getStringValue(); },
    }
}
