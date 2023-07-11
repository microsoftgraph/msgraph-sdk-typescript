import {createWorkflowFromDiscriminatorValue} from '../../../../../models/identityGovernance/createWorkflowFromDiscriminatorValue';
import {serializeWorkflow} from '../../../../../models/identityGovernance/serializeWorkflow';
import {Workflow} from '../../../../../models/identityGovernance/workflow';
import {CreateNewVersionPostRequestBody} from './createNewVersionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateNewVersionPostRequestBody(createNewVersionPostRequestBody: CreateNewVersionPostRequestBody | undefined = {} as CreateNewVersionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "workflow": n => { createNewVersionPostRequestBody.workflow = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
