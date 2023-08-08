import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import type {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import type {SoftwareOathAuthenticationMethodCollectionResponse} from './softwareOathAuthenticationMethodCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethodCollectionResponse(writer: SerializationWriter, softwareOathAuthenticationMethodCollectionResponse: SoftwareOathAuthenticationMethodCollectionResponse | undefined = {} as SoftwareOathAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, softwareOathAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<SoftwareOathAuthenticationMethod>("value", softwareOathAuthenticationMethodCollectionResponse.value, serializeSoftwareOathAuthenticationMethod);
}
