import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {createConditionalAccessFilterFromDiscriminatorValue} from './createConditionalAccessFilterFromDiscriminatorValue';
import {serializeConditionalAccessFilter} from './serializeConditionalAccessFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessDevices(conditionalAccessDevices: ConditionalAccessDevices | undefined = {} as ConditionalAccessDevices) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceFilter": n => { conditionalAccessDevices.deviceFilter = n.getObjectValue<ConditionalAccessFilter>(createConditionalAccessFilterFromDiscriminatorValue); },
        "@odata.type": n => { conditionalAccessDevices.odataType = n.getStringValue(); },
    }
}
