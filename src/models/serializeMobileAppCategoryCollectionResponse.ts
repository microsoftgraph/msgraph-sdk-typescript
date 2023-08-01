import type {MobileAppCategory} from './mobileAppCategory';
import type {MobileAppCategoryCollectionResponse} from './mobileAppCategoryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppCategoryCollectionResponse(writer: SerializationWriter, mobileAppCategoryCollectionResponse: MobileAppCategoryCollectionResponse | undefined = {} as MobileAppCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileAppCategory>("value", mobileAppCategoryCollectionResponse.value, serializeMobileAppCategory);
}
