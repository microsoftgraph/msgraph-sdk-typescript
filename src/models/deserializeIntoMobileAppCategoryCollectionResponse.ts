import { createMobileAppCategoryFromDiscriminatorValue } from './createMobileAppCategoryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MobileAppCategory } from './mobileAppCategory';
import { type MobileAppCategoryCollectionResponse } from './mobileAppCategoryCollectionResponse';
import { serializeMobileAppCategory } from './serializeMobileAppCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategoryCollectionResponse(mobileAppCategoryCollectionResponse: MobileAppCategoryCollectionResponse | undefined = {} as MobileAppCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppCategoryCollectionResponse),
        "value": n => { mobileAppCategoryCollectionResponse.value = n.getCollectionOfObjectValues<MobileAppCategory>(createMobileAppCategoryFromDiscriminatorValue); },
    }
}
