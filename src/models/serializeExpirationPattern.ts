import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternType} from './expirationPatternType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpirationPattern(expirationPattern: ExpirationPattern | undefined = {} as ExpirationPattern, writer: SerializationWriter) : void {
        writer.writeDurationValue("duration", expirationPattern.duration);
        writer.writeDateValue("endDateTime", expirationPattern.endDateTime);
        writer.writeStringValue("@odata.type", expirationPattern.odataType);
        writer.writeEnumValue<ExpirationPatternType>("type", expirationPattern.type);
        writer.writeAdditionalData(expirationPattern.additionalData);
}
