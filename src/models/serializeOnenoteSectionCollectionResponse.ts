import type {OnenoteSection} from './onenoteSection';
import type {OnenoteSectionCollectionResponse} from './onenoteSectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteSectionCollectionResponse(writer: SerializationWriter, onenoteSectionCollectionResponse: OnenoteSectionCollectionResponse | undefined = {} as OnenoteSectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteSectionCollectionResponse)
        writer.writeCollectionOfObjectValues<OnenoteSection>("value", onenoteSectionCollectionResponse.value, serializeOnenoteSection);
}
