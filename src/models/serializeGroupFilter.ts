import {GroupFilter} from './groupFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupFilter(groupFilter: GroupFilter | undefined = {} as GroupFilter, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("includedGroups", groupFilter.includedGroups);
        writer.writeStringValue("@odata.type", groupFilter.odataType);
        writer.writeAdditionalData(groupFilter.additionalData);
}
