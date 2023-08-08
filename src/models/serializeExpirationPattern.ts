import type {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternType} from './expirationPatternType';
import {Duration} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpirationPattern(writer: SerializationWriter, expirationPattern: ExpirationPattern | undefined = {} as ExpirationPattern) : void {
        writer.writeDurationValue("duration", expirationPattern.duration);
        writer.writeDateValue("endDateTime", expirationPattern.endDateTime);
        writer.writeStringValue("@odata.type", expirationPattern.odataType);
        writer.writeEnumValue<ExpirationPatternType>("type", expirationPattern.type);
        writer.writeAdditionalData(expirationPattern.additionalData);
}
