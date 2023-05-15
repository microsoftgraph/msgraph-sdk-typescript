import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OnenoteSection} from './onenoteSection';
import {OnenoteSectionCollectionResponse} from './onenoteSectionCollectionResponse';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteSectionCollectionResponse(onenoteSectionCollectionResponse: OnenoteSectionCollectionResponse | undefined = {} as OnenoteSectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteSectionCollectionResponse),
        "value": n => { onenoteSectionCollectionResponse.value = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); },
    }
}
