import { createFilterGroupFromDiscriminatorValue } from './createFilterGroupFromDiscriminatorValue';
import { type Filter } from './filter';
import { type FilterGroup } from './filterGroup';
import { serializeFilterGroup } from './serializeFilterGroup';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilter(filter: Filter | undefined = {} as Filter) : Record<string, (node: ParseNode) => void> {
    return {
        "categoryFilterGroups": n => { filter.categoryFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "groups": n => { filter.groups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "inputFilterGroups": n => { filter.inputFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "@odata.type": n => { filter.odataType = n.getStringValue(); },
    }
}
