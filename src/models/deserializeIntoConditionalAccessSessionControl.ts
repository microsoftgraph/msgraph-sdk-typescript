import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessSessionControl(conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {} as ConditionalAccessSessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { conditionalAccessSessionControl.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { conditionalAccessSessionControl.odataType = n.getStringValue(); },
    }
}
