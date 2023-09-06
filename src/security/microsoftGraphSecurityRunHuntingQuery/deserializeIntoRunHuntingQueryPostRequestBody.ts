import { type RunHuntingQueryPostRequestBody } from './runHuntingQueryPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRunHuntingQueryPostRequestBody(runHuntingQueryPostRequestBody: RunHuntingQueryPostRequestBody | undefined = {} as RunHuntingQueryPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "query": n => { runHuntingQueryPostRequestBody.query = n.getStringValue(); },
    }
}
