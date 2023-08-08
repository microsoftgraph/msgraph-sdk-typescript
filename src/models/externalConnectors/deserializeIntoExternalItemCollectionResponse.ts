import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import type {ExternalItem} from './externalItem';
import type {ExternalItemCollectionResponse} from './externalItemCollectionResponse';
import {serializeExternalItem} from './serializeExternalItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItemCollectionResponse(externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {} as ExternalItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalItemCollectionResponse),
        "value": n => { externalItemCollectionResponse.value = n.getCollectionOfObjectValues<ExternalItem>(createExternalItemFromDiscriminatorValue); },
    }
}
