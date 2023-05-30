import {GroupFilter} from './groupFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupFilter(writer: SerializationWriter, groupFilter: GroupFilter | undefined = {} as GroupFilter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("includedGroups", groupFilter.includedGroups);
        writer.writeStringValue("@odata.type", groupFilter.odataType);
        writer.writeAdditionalData(groupFilter.additionalData);
}
