import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoveryCaseFromDiscriminatorValue } from './createEdiscoveryCaseFromDiscriminatorValue';
import { type EdiscoveryCase } from './ediscoveryCase';
import { type EdiscoveryCaseCollectionResponse } from './ediscoveryCaseCollectionResponse';
import { serializeEdiscoveryCase } from './serializeEdiscoveryCase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCaseCollectionResponse(ediscoveryCaseCollectionResponse: EdiscoveryCaseCollectionResponse | undefined = {} as EdiscoveryCaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryCaseCollectionResponse),
        "value": n => { ediscoveryCaseCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryCase>(createEdiscoveryCaseFromDiscriminatorValue); },
    }
}
