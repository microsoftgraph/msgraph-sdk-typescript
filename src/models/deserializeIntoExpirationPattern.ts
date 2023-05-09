import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternType} from './expirationPatternType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExpirationPattern(expirationPattern: ExpirationPattern | undefined = {} as ExpirationPattern) : Record<string, (node: ParseNode) => void> {
    return {
        "duration": n => { expirationPattern.duration = n.getDurationValue(); },
        "endDateTime": n => { expirationPattern.endDateTime = n.getDateValue(); },
        "@odata.type": n => { expirationPattern.odataType = n.getStringValue(); },
        "type": n => { expirationPattern.type = n.getEnumValue<ExpirationPatternType>(ExpirationPatternType); },
    }
}
