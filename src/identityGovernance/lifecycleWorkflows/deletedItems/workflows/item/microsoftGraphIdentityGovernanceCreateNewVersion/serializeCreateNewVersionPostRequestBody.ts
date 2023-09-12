import { serializeWorkflow } from '../../../../../../models/identityGovernance/serializeWorkflow';
import { type Workflow } from '../../../../../../models/identityGovernance/workflow';
import { type CreateNewVersionPostRequestBody } from './createNewVersionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateNewVersionPostRequestBody(writer: SerializationWriter, createNewVersionPostRequestBody: CreateNewVersionPostRequestBody | undefined = {} as CreateNewVersionPostRequestBody) : void {
        writer.writeObjectValue<Workflow>("workflow", createNewVersionPostRequestBody.workflow, serializeWorkflow);
        writer.writeAdditionalData(createNewVersionPostRequestBody.additionalData);
}
