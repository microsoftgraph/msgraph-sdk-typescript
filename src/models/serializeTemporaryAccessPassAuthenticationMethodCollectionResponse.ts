import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './temporaryAccessPassAuthenticationMethodCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodCollectionResponse(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {} as TemporaryAccessPassAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, temporaryAccessPassAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>("value", temporaryAccessPassAuthenticationMethodCollectionResponse.value, serializeTemporaryAccessPassAuthenticationMethod);
}
