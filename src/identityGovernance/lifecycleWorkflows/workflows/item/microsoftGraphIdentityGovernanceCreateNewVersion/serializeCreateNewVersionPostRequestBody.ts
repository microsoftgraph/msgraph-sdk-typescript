import {serializeWorkflow} from '../../../../../models/identityGovernance/serializeWorkflow';
import {Workflow} from '../../../../../models/identityGovernance/workflow';
import {CreateNewVersionPostRequestBody} from './createNewVersionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateNewVersionPostRequestBody(writer: SerializationWriter, createNewVersionPostRequestBody: CreateNewVersionPostRequestBody | undefined = {} as CreateNewVersionPostRequestBody) : void {
        writer.writeObjectValue<Workflow>("workflow", createNewVersionPostRequestBody.workflow, serializeWorkflow);
        writer.writeAdditionalData(createNewVersionPostRequestBody.additionalData);
}
