import type {RunHuntingQueryPostRequestBody} from './runHuntingQueryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRunHuntingQueryPostRequestBody(runHuntingQueryPostRequestBody: RunHuntingQueryPostRequestBody | undefined = {} as RunHuntingQueryPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "query": n => { runHuntingQueryPostRequestBody.query = n.getStringValue(); },
    }
}
