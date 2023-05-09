import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import {ExternalItem} from './externalItem';
import {ExternalItemCollectionResponse} from './externalItemCollectionResponse';
import {serializeExternalItem} from './serializeExternalItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItemCollectionResponse(externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {} as ExternalItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalItemCollectionResponse),
        "value": n => { externalItemCollectionResponse.value = n.getCollectionOfObjectValues<ExternalItem>(createExternalItemFromDiscriminatorValue); },
    }
}
