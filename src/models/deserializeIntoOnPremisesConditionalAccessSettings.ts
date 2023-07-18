import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoOnPremisesConditionalAccessSettings(onPremisesConditionalAccessSettings: OnPremisesConditionalAccessSettings | undefined = {} as OnPremisesConditionalAccessSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onPremisesConditionalAccessSettings),
        "enabled": n => { onPremisesConditionalAccessSettings.enabled = n.getBooleanValue(); },
        "excludedGroups": n => { onPremisesConditionalAccessSettings.excludedGroups = n.getCollectionOfPrimitiveValues<Guid>(); },
        "includedGroups": n => { onPremisesConditionalAccessSettings.includedGroups = n.getCollectionOfPrimitiveValues<Guid>(); },
        "overrideDefaultRule": n => { onPremisesConditionalAccessSettings.overrideDefaultRule = n.getBooleanValue(); },
    }
}
