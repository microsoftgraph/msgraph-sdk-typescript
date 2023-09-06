import { type GroupFilter } from './groupFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupFilter(groupFilter: GroupFilter | undefined = {} as GroupFilter) : Record<string, (node: ParseNode) => void> {
    return {
        "includedGroups": n => { groupFilter.includedGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { groupFilter.odataType = n.getStringValue(); },
    }
}
