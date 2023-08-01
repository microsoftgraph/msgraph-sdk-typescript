import type {BaseDeltaFunctionResponse} from './baseDeltaFunctionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseDeltaFunctionResponse(baseDeltaFunctionResponse: BaseDeltaFunctionResponse | undefined = {} as BaseDeltaFunctionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.deltaLink": n => { baseDeltaFunctionResponse.odataDeltaLink = n.getStringValue(); },
        "@odata.nextLink": n => { baseDeltaFunctionResponse.odataNextLink = n.getStringValue(); },
    }
}
