import {ResourceReference} from './resourceReference';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceReference(resourceReference: ResourceReference | undefined = {} as ResourceReference) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceReference.id = n.getStringValue(); },
        "@odata.type": n => { resourceReference.odataType = n.getStringValue(); },
        "type": n => { resourceReference.type = n.getStringValue(); },
        "webUrl": n => { resourceReference.webUrl = n.getStringValue(); },
    }
}
