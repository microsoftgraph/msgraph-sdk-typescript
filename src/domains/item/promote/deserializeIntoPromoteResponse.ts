import type {PromoteResponse} from './promoteResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPromoteResponse(promoteResponse: PromoteResponse | undefined = {} as PromoteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { promoteResponse.value = n.getBooleanValue(); },
    }
}
