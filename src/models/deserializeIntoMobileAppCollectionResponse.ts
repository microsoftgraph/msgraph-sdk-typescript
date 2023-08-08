import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {MobileApp} from './mobileApp';
import type {MobileAppCollectionResponse} from './mobileAppCollectionResponse';
import {serializeMobileApp} from './serializeMobileApp';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCollectionResponse(mobileAppCollectionResponse: MobileAppCollectionResponse | undefined = {} as MobileAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppCollectionResponse),
        "value": n => { mobileAppCollectionResponse.value = n.getCollectionOfObjectValues<MobileApp>(createMobileAppFromDiscriminatorValue); },
    }
}
