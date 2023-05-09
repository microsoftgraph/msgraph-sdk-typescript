import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetByIdsPostRequestBody(getByIdsPostRequestBody: GetByIdsPostRequestBody | undefined = {} as GetByIdsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { getByIdsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "types": n => { getByIdsPostRequestBody.types = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
