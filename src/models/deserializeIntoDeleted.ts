import { type Deleted } from './deleted';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleted(deleted: Deleted | undefined = {} as Deleted) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deleted.odataType = n.getStringValue(); },
        "state": n => { deleted.state = n.getStringValue(); },
    }
}
