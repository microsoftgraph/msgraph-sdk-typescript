import {FilterClause} from './filterClause';
import {FilterGroup} from './filterGroup';
import {serializeFilterClause} from './serializeFilterClause';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterGroup(writer: SerializationWriter, filterGroup: FilterGroup | undefined = {} as FilterGroup) : void {
        writer.writeCollectionOfObjectValues<FilterClause>("clauses", filterGroup.clauses, serializeFilterClause);
        writer.writeStringValue("name", filterGroup.name);
        writer.writeStringValue("@odata.type", filterGroup.odataType);
        writer.writeAdditionalData(filterGroup.additionalData);
}
