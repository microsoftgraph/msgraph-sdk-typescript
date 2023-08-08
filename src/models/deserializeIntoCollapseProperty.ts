import type {CollapseProperty} from './collapseProperty';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCollapseProperty(collapseProperty: CollapseProperty | undefined = {} as CollapseProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "fields": n => { collapseProperty.fields = n.getCollectionOfPrimitiveValues<string>(); },
        "limit": n => { collapseProperty.limit = n.getNumberValue(); },
        "@odata.type": n => { collapseProperty.odataType = n.getStringValue(); },
    }
}
