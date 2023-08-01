import type {AttributeSet} from './attributeSet';
import type {AttributeSetCollectionResponse} from './attributeSetCollectionResponse';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeSetCollectionResponse(writer: SerializationWriter, attributeSetCollectionResponse: AttributeSetCollectionResponse | undefined = {} as AttributeSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attributeSetCollectionResponse)
        writer.writeCollectionOfObjectValues<AttributeSet>("value", attributeSetCollectionResponse.value, serializeAttributeSet);
}
