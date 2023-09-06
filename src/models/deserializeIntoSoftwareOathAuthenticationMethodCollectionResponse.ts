import { createSoftwareOathAuthenticationMethodFromDiscriminatorValue } from './createSoftwareOathAuthenticationMethodFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSoftwareOathAuthenticationMethod } from './serializeSoftwareOathAuthenticationMethod';
import { type SoftwareOathAuthenticationMethod } from './softwareOathAuthenticationMethod';
import { type SoftwareOathAuthenticationMethodCollectionResponse } from './softwareOathAuthenticationMethodCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareOathAuthenticationMethodCollectionResponse(softwareOathAuthenticationMethodCollectionResponse: SoftwareOathAuthenticationMethodCollectionResponse | undefined = {} as SoftwareOathAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(softwareOathAuthenticationMethodCollectionResponse),
        "value": n => { softwareOathAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<SoftwareOathAuthenticationMethod>(createSoftwareOathAuthenticationMethodFromDiscriminatorValue); },
    }
}
