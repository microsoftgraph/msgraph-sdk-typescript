import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoveryCustodianFromDiscriminatorValue} from './createEdiscoveryCustodianFromDiscriminatorValue';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {EdiscoveryCustodianCollectionResponse} from './ediscoveryCustodianCollectionResponse';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCustodianCollectionResponse(ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {} as EdiscoveryCustodianCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryCustodianCollectionResponse),
        "value": n => { ediscoveryCustodianCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryCustodian>(createEdiscoveryCustodianFromDiscriminatorValue); },
    }
}
