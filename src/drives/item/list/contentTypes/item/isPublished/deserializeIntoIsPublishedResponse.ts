import { type IsPublishedResponse } from './isPublishedResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIsPublishedResponse(isPublishedResponse: IsPublishedResponse | undefined = {} as IsPublishedResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isPublishedResponse.value = n.getBooleanValue(); },
    }
}
