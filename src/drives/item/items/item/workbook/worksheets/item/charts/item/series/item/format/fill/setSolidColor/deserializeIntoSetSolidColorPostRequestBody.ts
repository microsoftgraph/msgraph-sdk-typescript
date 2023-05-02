import {SetSolidColorPostRequestBody} from './setSolidColorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetSolidColorPostRequestBody(setSolidColorPostRequestBody: SetSolidColorPostRequestBody | undefined = {} as SetSolidColorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { setSolidColorPostRequestBody.color = n.getStringValue(); },
    }
}
