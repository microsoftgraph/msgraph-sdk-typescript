import { createOnenoteSectionFromDiscriminatorValue } from './createOnenoteSectionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OnenoteSection } from './onenoteSection';
import { type OnenoteSectionCollectionResponse } from './onenoteSectionCollectionResponse';
import { serializeOnenoteSection } from './serializeOnenoteSection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteSectionCollectionResponse(onenoteSectionCollectionResponse: OnenoteSectionCollectionResponse | undefined = {} as OnenoteSectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteSectionCollectionResponse),
        "value": n => { onenoteSectionCollectionResponse.value = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
    }
}
