import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewSet} from './accessReviewSet';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewSet(writer: SerializationWriter, accessReviewSet: AccessReviewSet | undefined = {} as AccessReviewSet) : void {
        serializeEntity(writer, accessReviewSet)
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinition>("definitions", accessReviewSet.definitions, serializeAccessReviewScheduleDefinition);
        writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinition>("historyDefinitions", accessReviewSet.historyDefinitions, serializeAccessReviewHistoryDefinition);
}
