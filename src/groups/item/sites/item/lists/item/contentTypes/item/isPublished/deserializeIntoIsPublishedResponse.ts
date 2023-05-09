import {IsPublishedResponse} from './isPublishedResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsPublishedResponse(isPublishedResponse: IsPublishedResponse | undefined = {} as IsPublishedResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isPublishedResponse.value = n.getBooleanValue(); },
    }
}
