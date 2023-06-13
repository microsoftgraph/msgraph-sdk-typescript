import {ContainerFilter} from './containerFilter';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContainerFilter(containerFilter: ContainerFilter | undefined = {} as ContainerFilter) : Record<string, (node: ParseNode) => void> {
    return {
        "includedContainers": n => { containerFilter.includedContainers = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { containerFilter.odataType = n.getStringValue(); },
    }
}
