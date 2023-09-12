import { type CountResponse } from './countResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCountResponse(countResponse: CountResponse | undefined = {} as CountResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { countResponse.value = n.getNumberValue(); },
    }
}
