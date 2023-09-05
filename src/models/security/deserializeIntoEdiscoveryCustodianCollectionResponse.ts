import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoveryCustodianFromDiscriminatorValue } from './createEdiscoveryCustodianFromDiscriminatorValue';
import { type EdiscoveryCustodian } from './ediscoveryCustodian';
import { type EdiscoveryCustodianCollectionResponse } from './ediscoveryCustodianCollectionResponse';
import { serializeEdiscoveryCustodian } from './serializeEdiscoveryCustodian';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCustodianCollectionResponse(ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {} as EdiscoveryCustodianCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryCustodianCollectionResponse),
        "value": n => { ediscoveryCustodianCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryCustodian>(createEdiscoveryCustodianFromDiscriminatorValue); },
    }
}
