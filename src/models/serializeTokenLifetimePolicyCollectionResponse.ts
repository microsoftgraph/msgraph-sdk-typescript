import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import type {TokenLifetimePolicy} from './tokenLifetimePolicy';
import type {TokenLifetimePolicyCollectionResponse} from './tokenLifetimePolicyCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicyCollectionResponse(writer: SerializationWriter, tokenLifetimePolicyCollectionResponse: TokenLifetimePolicyCollectionResponse | undefined = {} as TokenLifetimePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenLifetimePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("value", tokenLifetimePolicyCollectionResponse.value, serializeTokenLifetimePolicy);
}
