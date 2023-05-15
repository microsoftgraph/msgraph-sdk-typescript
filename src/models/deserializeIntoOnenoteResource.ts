import {deserializeIntoOnenoteEntityBaseModel} from './deserializeIntoOnenoteEntityBaseModel';
import {OnenoteResource} from './onenoteResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteResource(onenoteResource: OnenoteResource | undefined = {} as OnenoteResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityBaseModel(onenoteResource),
        "content": n => { onenoteResource.content = n.getStringValue(); },
        "contentUrl": n => { onenoteResource.contentUrl = n.getStringValue(); },
    }
}
