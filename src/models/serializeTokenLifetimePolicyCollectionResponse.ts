import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {TokenLifetimePolicyCollectionResponse} from './tokenLifetimePolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicyCollectionResponse(writer: SerializationWriter, tokenLifetimePolicyCollectionResponse: TokenLifetimePolicyCollectionResponse | undefined = {} as TokenLifetimePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenLifetimePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("value", tokenLifetimePolicyCollectionResponse.value, serializeTokenLifetimePolicy);
}
