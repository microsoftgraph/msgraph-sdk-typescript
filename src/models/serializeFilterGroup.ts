import { type FilterClause } from './filterClause';
import { type FilterGroup } from './filterGroup';
import { serializeFilterClause } from './serializeFilterClause';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterGroup(writer: SerializationWriter, filterGroup: FilterGroup | undefined = {} as FilterGroup) : void {
        writer.writeCollectionOfObjectValues<FilterClause>("clauses", filterGroup.clauses, serializeFilterClause);
        writer.writeStringValue("name", filterGroup.name);
        writer.writeStringValue("@odata.type", filterGroup.odataType);
        writer.writeAdditionalData(filterGroup.additionalData);
}
