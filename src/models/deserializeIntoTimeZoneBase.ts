import type {TimeZoneBase} from './timeZoneBase';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeZoneBase(timeZoneBase: TimeZoneBase | undefined = {} as TimeZoneBase) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { timeZoneBase.name = n.getStringValue(); },
        "@odata.type": n => { timeZoneBase.odataType = n.getStringValue(); },
    }
}
