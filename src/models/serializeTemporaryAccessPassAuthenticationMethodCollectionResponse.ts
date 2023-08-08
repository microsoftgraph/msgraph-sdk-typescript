import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './temporaryAccessPassAuthenticationMethodCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodCollectionResponse(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {} as TemporaryAccessPassAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, temporaryAccessPassAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>("value", temporaryAccessPassAuthenticationMethodCollectionResponse.value, serializeTemporaryAccessPassAuthenticationMethod);
}
