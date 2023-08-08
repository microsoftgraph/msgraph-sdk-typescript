import type {SetSolidColorPostRequestBody} from './setSolidColorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetSolidColorPostRequestBody(setSolidColorPostRequestBody: SetSolidColorPostRequestBody | undefined = {} as SetSolidColorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { setSolidColorPostRequestBody.color = n.getStringValue(); },
    }
}
