import {Deleted} from './deleted';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleted(deleted: Deleted | undefined = {} as Deleted) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deleted.odataType = n.getStringValue(); },
        "state": n => { deleted.state = n.getStringValue(); },
    }
}
