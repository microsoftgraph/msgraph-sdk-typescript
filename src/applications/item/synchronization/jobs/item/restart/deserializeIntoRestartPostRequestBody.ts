import {createSynchronizationJobRestartCriteriaFromDiscriminatorValue} from '../../../../../../models/createSynchronizationJobRestartCriteriaFromDiscriminatorValue';
import {serializeSynchronizationJobRestartCriteria} from '../../../../../../models/serializeSynchronizationJobRestartCriteria';
import type {SynchronizationJobRestartCriteria} from '../../../../../../models/synchronizationJobRestartCriteria';
import type {RestartPostRequestBody} from './restartPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRestartPostRequestBody(restartPostRequestBody: RestartPostRequestBody | undefined = {} as RestartPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { restartPostRequestBody.criteria = n.getObjectValue<SynchronizationJobRestartCriteria>(createSynchronizationJobRestartCriteriaFromDiscriminatorValue); },
    }
}
