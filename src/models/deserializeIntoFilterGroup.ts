import {createFilterClauseFromDiscriminatorValue} from './createFilterClauseFromDiscriminatorValue';
import {FilterClause} from './filterClause';
import {FilterGroup} from './filterGroup';
import {serializeFilterClause} from './serializeFilterClause';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterGroup(filterGroup: FilterGroup | undefined = {} as FilterGroup) : Record<string, (node: ParseNode) => void> {
    return {
        "clauses": n => { filterGroup.clauses = n.getCollectionOfObjectValues<FilterClause>(createFilterClauseFromDiscriminatorValue); },
        "name": n => { filterGroup.name = n.getStringValue(); },
        "@odata.type": n => { filterGroup.odataType = n.getStringValue(); },
    }
}
