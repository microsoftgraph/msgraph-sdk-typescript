import type {ExpirationPattern} from './expirationPattern';
import type {PatternedRecurrence} from './patternedRecurrence';
import type {RequestSchedule} from './requestSchedule';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequestSchedule(writer: SerializationWriter, requestSchedule: RequestSchedule | undefined = {} as RequestSchedule) : void {
        writer.writeObjectValue<ExpirationPattern>("expiration", requestSchedule.expiration, serializeExpirationPattern);
        writer.writeStringValue("@odata.type", requestSchedule.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", requestSchedule.recurrence, serializePatternedRecurrence);
        writer.writeDateValue("startDateTime", requestSchedule.startDateTime);
        writer.writeAdditionalData(requestSchedule.additionalData);
}
