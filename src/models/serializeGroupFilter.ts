import { type GroupFilter } from './groupFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroupFilter(writer: SerializationWriter, groupFilter: GroupFilter | undefined = {} as GroupFilter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("includedGroups", groupFilter.includedGroups);
        writer.writeStringValue("@odata.type", groupFilter.odataType);
        writer.writeAdditionalData(groupFilter.additionalData);
}
