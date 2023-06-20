import {Filter} from './filter';
import {FilterGroup} from './filterGroup';
import {serializeFilterGroup} from './serializeFilterGroup';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilter(filter: Filter | undefined = {} as Filter, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<FilterGroup>("categoryFilterGroups", filter.categoryFilterGroups, serializeFilterGroup);
        writer.writeCollectionOfObjectValues<FilterGroup>("groups", filter.groups, serializeFilterGroup);
        writer.writeCollectionOfObjectValues<FilterGroup>("inputFilterGroups", filter.inputFilterGroups, serializeFilterGroup);
        writer.writeStringValue("@odata.type", filter.odataType);
        writer.writeAdditionalData(filter.additionalData);
}
