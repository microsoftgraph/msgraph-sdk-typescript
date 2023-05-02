import {MarkReadResponse} from './markReadResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkReadResponse(markReadResponse: MarkReadResponse | undefined = {} as MarkReadResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { markReadResponse.value = n.getBooleanValue(); },
    }
}
