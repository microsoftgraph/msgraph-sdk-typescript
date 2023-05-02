import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MobileAppCategory} from './mobileAppCategory';
import {MobileAppCategoryCollectionResponse} from './mobileAppCategoryCollectionResponse';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategoryCollectionResponse(mobileAppCategoryCollectionResponse: MobileAppCategoryCollectionResponse | undefined = {} as MobileAppCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppCategoryCollectionResponse),
        "value": n => { mobileAppCategoryCollectionResponse.value = n.getCollectionOfObjectValues<MobileAppCategory>(createMobileAppCategoryFromDiscriminatorValue); },
    }
}
