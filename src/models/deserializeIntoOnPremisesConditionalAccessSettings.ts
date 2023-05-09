import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesConditionalAccessSettings(onPremisesConditionalAccessSettings: OnPremisesConditionalAccessSettings | undefined = {} as OnPremisesConditionalAccessSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onPremisesConditionalAccessSettings),
        "enabled": n => { onPremisesConditionalAccessSettings.enabled = n.getBooleanValue(); },
        "excludedGroups": n => { onPremisesConditionalAccessSettings.excludedGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "includedGroups": n => { onPremisesConditionalAccessSettings.includedGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "overrideDefaultRule": n => { onPremisesConditionalAccessSettings.overrideDefaultRule = n.getBooleanValue(); },
    }
}
