import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {SoftwareOathAuthenticationMethodCollectionResponse} from './softwareOathAuthenticationMethodCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethodCollectionResponse(writer: SerializationWriter, softwareOathAuthenticationMethodCollectionResponse: SoftwareOathAuthenticationMethodCollectionResponse | undefined = {} as SoftwareOathAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, softwareOathAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<SoftwareOathAuthenticationMethod>("value", softwareOathAuthenticationMethodCollectionResponse.value, serializeSoftwareOathAuthenticationMethod);
}
