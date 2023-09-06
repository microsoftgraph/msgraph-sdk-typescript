import { type Filter } from './filter';
import { type FilterGroup } from './filterGroup';
import { serializeFilterGroup } from './serializeFilterGroup';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilter(writer: SerializationWriter, filter: Filter | undefined = {} as Filter) : void {
        writer.writeCollectionOfObjectValues<FilterGroup>("categoryFilterGroups", filter.categoryFilterGroups, serializeFilterGroup);
        writer.writeCollectionOfObjectValues<FilterGroup>("groups", filter.groups, serializeFilterGroup);
        writer.writeCollectionOfObjectValues<FilterGroup>("inputFilterGroups", filter.inputFilterGroups, serializeFilterGroup);
        writer.writeStringValue("@odata.type", filter.odataType);
        writer.writeAdditionalData(filter.additionalData);
}
