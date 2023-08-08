import type {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import type {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import type {AccessReviewSet} from './accessReviewSet';
import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewSet(accessReviewSet: AccessReviewSet | undefined = {} as AccessReviewSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewSet),
        "definitions": n => { accessReviewSet.definitions = n.getCollectionOfObjectValues<AccessReviewScheduleDefinition>(createAccessReviewScheduleDefinitionFromDiscriminatorValue); },
        "historyDefinitions": n => { accessReviewSet.historyDefinitions = n.getCollectionOfObjectValues<AccessReviewHistoryDefinition>(createAccessReviewHistoryDefinitionFromDiscriminatorValue); },
    }
}
