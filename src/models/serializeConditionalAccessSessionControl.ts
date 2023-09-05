import { type ConditionalAccessSessionControl } from './conditionalAccessSessionControl';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControl(writer: SerializationWriter, conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {} as ConditionalAccessSessionControl) : void {
        writer.writeBooleanValue("isEnabled", conditionalAccessSessionControl.isEnabled);
        writer.writeStringValue("@odata.type", conditionalAccessSessionControl.odataType);
        writer.writeAdditionalData(conditionalAccessSessionControl.additionalData);
}
