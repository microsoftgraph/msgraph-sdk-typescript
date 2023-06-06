import {serializeSynchronizationJobRestartCriteria} from '../../../../../../models/serializeSynchronizationJobRestartCriteria';
import {SynchronizationJobRestartCriteria} from '../../../../../../models/synchronizationJobRestartCriteria';
import {RestartPostRequestBody} from './restartPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRestartPostRequestBody(writer: SerializationWriter, restartPostRequestBody: RestartPostRequestBody | undefined = {} as RestartPostRequestBody) : void {
        writer.writeObjectValue<SynchronizationJobRestartCriteria>("criteria", restartPostRequestBody.criteria, serializeSynchronizationJobRestartCriteria);
        writer.writeAdditionalData(restartPostRequestBody.additionalData);
}
