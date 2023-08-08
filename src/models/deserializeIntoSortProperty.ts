import type {SortProperty} from './sortProperty';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSortProperty(sortProperty: SortProperty | undefined = {} as SortProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "isDescending": n => { sortProperty.isDescending = n.getBooleanValue(); },
        "name": n => { sortProperty.name = n.getStringValue(); },
        "@odata.type": n => { sortProperty.odataType = n.getStringValue(); },
    }
}
