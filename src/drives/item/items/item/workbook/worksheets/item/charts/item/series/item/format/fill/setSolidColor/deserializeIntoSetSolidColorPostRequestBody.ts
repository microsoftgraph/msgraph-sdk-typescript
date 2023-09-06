import { type SetSolidColorPostRequestBody } from './setSolidColorPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetSolidColorPostRequestBody(setSolidColorPostRequestBody: SetSolidColorPostRequestBody | undefined = {} as SetSolidColorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { setSolidColorPostRequestBody.color = n.getStringValue(); },
    }
}
