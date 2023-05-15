import {ExpirationPattern} from './expirationPattern';
import {PatternedRecurrence} from './patternedRecurrence';
import {RequestSchedule} from './requestSchedule';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequestSchedule(writer: SerializationWriter, requestSchedule: RequestSchedule | undefined = {} as RequestSchedule) : void {
        writer.writeObjectValue<ExpirationPattern>("expiration", requestSchedule.expiration, serializeExpirationPattern);
        writer.writeStringValue("@odata.type", requestSchedule.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", requestSchedule.recurrence, serializePatternedRecurrence);
        writer.writeDateValue("startDateTime", requestSchedule.startDateTime);
        writer.writeAdditionalData(requestSchedule.additionalData);
}
