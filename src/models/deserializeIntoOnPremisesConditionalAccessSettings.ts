import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type OnPremisesConditionalAccessSettings } from './onPremisesConditionalAccessSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoOnPremisesConditionalAccessSettings(onPremisesConditionalAccessSettings: OnPremisesConditionalAccessSettings | undefined = {} as OnPremisesConditionalAccessSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onPremisesConditionalAccessSettings),
        "enabled": n => { onPremisesConditionalAccessSettings.enabled = n.getBooleanValue(); },
        "excludedGroups": n => { onPremisesConditionalAccessSettings.excludedGroups = n.getCollectionOfPrimitiveValues<Guid>(); },
        "includedGroups": n => { onPremisesConditionalAccessSettings.includedGroups = n.getCollectionOfPrimitiveValues<Guid>(); },
        "overrideDefaultRule": n => { onPremisesConditionalAccessSettings.overrideDefaultRule = n.getBooleanValue(); },
    }
}
