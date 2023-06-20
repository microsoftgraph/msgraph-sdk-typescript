import {AttributeSet} from './attributeSet';
import {AttributeSetCollectionResponse} from './attributeSetCollectionResponse';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeSetCollectionResponse(attributeSetCollectionResponse: AttributeSetCollectionResponse | undefined = {} as AttributeSetCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attributeSetCollectionResponse)
        writer.writeCollectionOfObjectValues<AttributeSet>("value", attributeSetCollectionResponse.value, serializeAttributeSet);
}
