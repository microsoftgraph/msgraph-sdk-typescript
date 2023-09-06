import { type ConditionalAccessDevices } from './conditionalAccessDevices';
import { type ConditionalAccessFilter } from './conditionalAccessFilter';
import { serializeConditionalAccessFilter } from './serializeConditionalAccessFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessDevices(writer: SerializationWriter, conditionalAccessDevices: ConditionalAccessDevices | undefined = {} as ConditionalAccessDevices) : void {
        writer.writeObjectValue<ConditionalAccessFilter>("deviceFilter", conditionalAccessDevices.deviceFilter, serializeConditionalAccessFilter);
        writer.writeStringValue("@odata.type", conditionalAccessDevices.odataType);
        writer.writeAdditionalData(conditionalAccessDevices.additionalData);
}
