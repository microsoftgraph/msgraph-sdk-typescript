import {CountResponse} from './countResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountResponse(countResponse: CountResponse | undefined = {} as CountResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { countResponse.value = n.getNumberValue(); },
    }
}
