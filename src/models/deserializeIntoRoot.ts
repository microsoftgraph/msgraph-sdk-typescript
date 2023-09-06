import { type Root } from './root';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRoot(root: Root | undefined = {} as Root) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { root.odataType = n.getStringValue(); },
    }
}
