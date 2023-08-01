import type {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import type {ExpirationPattern} from './expirationPattern';
import type {PatternedRecurrence} from './patternedRecurrence';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagementSchedule(writer: SerializationWriter, entitlementManagementSchedule: EntitlementManagementSchedule | undefined = {} as EntitlementManagementSchedule) : void {
        writer.writeObjectValue<ExpirationPattern>("expiration", entitlementManagementSchedule.expiration, serializeExpirationPattern);
        writer.writeStringValue("@odata.type", entitlementManagementSchedule.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", entitlementManagementSchedule.recurrence, serializePatternedRecurrence);
        writer.writeDateValue("startDateTime", entitlementManagementSchedule.startDateTime);
        writer.writeAdditionalData(entitlementManagementSchedule.additionalData);
}
