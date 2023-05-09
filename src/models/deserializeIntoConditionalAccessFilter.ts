import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {FilterMode} from './filterMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessFilter(conditionalAccessFilter: ConditionalAccessFilter | undefined = {} as ConditionalAccessFilter) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { conditionalAccessFilter.mode = n.getEnumValue<FilterMode>(FilterMode); },
        "@odata.type": n => { conditionalAccessFilter.odataType = n.getStringValue(); },
        "rule": n => { conditionalAccessFilter.rule = n.getStringValue(); },
    }
}
