import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {ExpirationPattern} from './expirationPattern';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagementSchedule(entitlementManagementSchedule: EntitlementManagementSchedule | undefined = {} as EntitlementManagementSchedule) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { entitlementManagementSchedule.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
        "@odata.type": n => { entitlementManagementSchedule.odataType = n.getStringValue(); },
        "recurrence": n => { entitlementManagementSchedule.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "startDateTime": n => { entitlementManagementSchedule.startDateTime = n.getDateValue(); },
    }
}
