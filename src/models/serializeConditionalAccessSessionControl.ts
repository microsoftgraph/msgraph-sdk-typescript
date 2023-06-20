import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControl(conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {} as ConditionalAccessSessionControl, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isEnabled", conditionalAccessSessionControl.isEnabled);
        writer.writeStringValue("@odata.type", conditionalAccessSessionControl.odataType);
        writer.writeAdditionalData(conditionalAccessSessionControl.additionalData);
}
