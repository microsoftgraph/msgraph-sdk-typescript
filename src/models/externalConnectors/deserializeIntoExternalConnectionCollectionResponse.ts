import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import type {ExternalConnection} from './externalConnection';
import type {ExternalConnectionCollectionResponse} from './externalConnectionCollectionResponse';
import {serializeExternalConnection} from './serializeExternalConnection';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalConnectionCollectionResponse(externalConnectionCollectionResponse: ExternalConnectionCollectionResponse | undefined = {} as ExternalConnectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalConnectionCollectionResponse),
        "value": n => { externalConnectionCollectionResponse.value = n.getCollectionOfObjectValues<ExternalConnection>(createExternalConnectionFromDiscriminatorValue); },
    }
}
