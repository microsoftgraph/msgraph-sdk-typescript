import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControl(writer: SerializationWriter, conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {} as ConditionalAccessSessionControl) : void {
        writer.writeBooleanValue("isEnabled", conditionalAccessSessionControl.isEnabled);
        writer.writeStringValue("@odata.type", conditionalAccessSessionControl.odataType);
        writer.writeAdditionalData(conditionalAccessSessionControl.additionalData);
}
