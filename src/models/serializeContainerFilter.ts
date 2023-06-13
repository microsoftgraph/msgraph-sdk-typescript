import {ContainerFilter} from './containerFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContainerFilter(writer: SerializationWriter, containerFilter: ContainerFilter | undefined = {} as ContainerFilter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("includedContainers", containerFilter.includedContainers);
        writer.writeStringValue("@odata.type", containerFilter.odataType);
        writer.writeAdditionalData(containerFilter.additionalData);
}
