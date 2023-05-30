import {createFilterGroupFromDiscriminatorValue} from './createFilterGroupFromDiscriminatorValue';
import {Filter} from './filter';
import {FilterGroup} from './filterGroup';
import {serializeFilterGroup} from './serializeFilterGroup';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilter(filter: Filter | undefined = {} as Filter) : Record<string, (node: ParseNode) => void> {
    return {
        "categoryFilterGroups": n => { filter.categoryFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "groups": n => { filter.groups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "inputFilterGroups": n => { filter.inputFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        "@odata.type": n => { filter.odataType = n.getStringValue(); },
    }
}
