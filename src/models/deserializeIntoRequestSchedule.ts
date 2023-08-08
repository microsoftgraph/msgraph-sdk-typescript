import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import type {ExpirationPattern} from './expirationPattern';
import type {PatternedRecurrence} from './patternedRecurrence';
import type {RequestSchedule} from './requestSchedule';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestSchedule(requestSchedule: RequestSchedule | undefined = {} as RequestSchedule) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { requestSchedule.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
        "@odata.type": n => { requestSchedule.odataType = n.getStringValue(); },
        "recurrence": n => { requestSchedule.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "startDateTime": n => { requestSchedule.startDateTime = n.getDateValue(); },
    }
}
