import { type ConditionalAccessFilter } from './conditionalAccessFilter';
import { FilterMode } from './filterMode';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessFilter(conditionalAccessFilter: ConditionalAccessFilter | undefined = {} as ConditionalAccessFilter) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { conditionalAccessFilter.mode = n.getEnumValue<FilterMode>(FilterMode); },
        "@odata.type": n => { conditionalAccessFilter.odataType = n.getStringValue(); },
        "rule": n => { conditionalAccessFilter.rule = n.getStringValue(); },
    }
}
