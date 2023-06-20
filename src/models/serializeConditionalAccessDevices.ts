import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {serializeConditionalAccessFilter} from './serializeConditionalAccessFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessDevices(conditionalAccessDevices: ConditionalAccessDevices | undefined = {} as ConditionalAccessDevices, writer: SerializationWriter) : void {
        writer.writeObjectValue<ConditionalAccessFilter>("deviceFilter", conditionalAccessDevices.deviceFilter, serializeConditionalAccessFilter);
        writer.writeStringValue("@odata.type", conditionalAccessDevices.odataType);
        writer.writeAdditionalData(conditionalAccessDevices.additionalData);
}
