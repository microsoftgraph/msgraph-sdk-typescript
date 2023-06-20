import {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {serializeAccessReviewStage} from '../../../../../../../../models/serializeAccessReviewStage';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewStage>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewStage);
}
