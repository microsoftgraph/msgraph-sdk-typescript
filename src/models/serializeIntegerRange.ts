import { type IntegerRange } from './integerRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIntegerRange(writer: SerializationWriter, integerRange: IntegerRange | undefined = {} as IntegerRange) : void {
        writer.writeNumberValue("end", integerRange.end);
        writer.writeStringValue("@odata.type", integerRange.odataType);
        writer.writeNumberValue("start", integerRange.start);
        writer.writeAdditionalData(integerRange.additionalData);
}
