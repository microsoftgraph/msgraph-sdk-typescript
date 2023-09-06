import { type TimeZoneInformation } from './timeZoneInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeZoneInformation(timeZoneInformation: TimeZoneInformation | undefined = {} as TimeZoneInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "alias": n => { timeZoneInformation.alias = n.getStringValue(); },
        "displayName": n => { timeZoneInformation.displayName = n.getStringValue(); },
        "@odata.type": n => { timeZoneInformation.odataType = n.getStringValue(); },
    }
}
