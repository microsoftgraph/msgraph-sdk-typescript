import {AccessReviewScheduleDefinition} from '../../../../models/accessReviewScheduleDefinition';
import {serializeAccessReviewScheduleDefinition} from '../../../../models/serializeAccessReviewScheduleDefinition';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinition>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewScheduleDefinition);
}
