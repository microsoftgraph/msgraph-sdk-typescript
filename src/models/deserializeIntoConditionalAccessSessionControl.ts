import { type ConditionalAccessSessionControl } from './conditionalAccessSessionControl';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessSessionControl(conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {} as ConditionalAccessSessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { conditionalAccessSessionControl.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { conditionalAccessSessionControl.odataType = n.getStringValue(); },
    }
}
