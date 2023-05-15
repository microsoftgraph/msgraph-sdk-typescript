import {Root} from './root';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoot(root: Root | undefined = {} as Root) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { root.odataType = n.getStringValue(); },
    }
}
