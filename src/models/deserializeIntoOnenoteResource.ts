import { deserializeIntoOnenoteEntityBaseModel } from './deserializeIntoOnenoteEntityBaseModel';
import { type OnenoteResource } from './onenoteResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteResource(onenoteResource: OnenoteResource | undefined = {} as OnenoteResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityBaseModel(onenoteResource),
        "content": n => { onenoteResource.content = n.getStringValue(); },
        "contentUrl": n => { onenoteResource.contentUrl = n.getStringValue(); },
    }
}
