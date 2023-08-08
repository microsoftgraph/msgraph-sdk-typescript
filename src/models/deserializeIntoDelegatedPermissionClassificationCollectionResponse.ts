import {createDelegatedPermissionClassificationFromDiscriminatorValue} from './createDelegatedPermissionClassificationFromDiscriminatorValue';
import type {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import type {DelegatedPermissionClassificationCollectionResponse} from './delegatedPermissionClassificationCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedPermissionClassification} from './serializeDelegatedPermissionClassification';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedPermissionClassificationCollectionResponse(delegatedPermissionClassificationCollectionResponse: DelegatedPermissionClassificationCollectionResponse | undefined = {} as DelegatedPermissionClassificationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedPermissionClassificationCollectionResponse),
        "value": n => { delegatedPermissionClassificationCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedPermissionClassification>(createDelegatedPermissionClassificationFromDiscriminatorValue); },
    }
}
