import { type AttributeSet } from './attributeSet';
import { type AttributeSetCollectionResponse } from './attributeSetCollectionResponse';
import { createAttributeSetFromDiscriminatorValue } from './createAttributeSetFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAttributeSet } from './serializeAttributeSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeSetCollectionResponse(attributeSetCollectionResponse: AttributeSetCollectionResponse | undefined = {} as AttributeSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attributeSetCollectionResponse),
        "value": n => { attributeSetCollectionResponse.value = n.getCollectionOfObjectValues<AttributeSet>(createAttributeSetFromDiscriminatorValue); },
    }
}
