import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createUnifiedGroupSourceFromDiscriminatorValue} from './createUnifiedGroupSourceFromDiscriminatorValue';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import type {UnifiedGroupSource} from './unifiedGroupSource';
import type {UnifiedGroupSourceCollectionResponse} from './unifiedGroupSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedGroupSourceCollectionResponse(unifiedGroupSourceCollectionResponse: UnifiedGroupSourceCollectionResponse | undefined = {} as UnifiedGroupSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedGroupSourceCollectionResponse),
        "value": n => { unifiedGroupSourceCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedGroupSource>(createUnifiedGroupSourceFromDiscriminatorValue); },
    }
}
