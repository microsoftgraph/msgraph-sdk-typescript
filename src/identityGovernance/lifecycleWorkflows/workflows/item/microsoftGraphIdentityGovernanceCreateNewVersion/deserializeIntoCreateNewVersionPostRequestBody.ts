import {createWorkflowFromDiscriminatorValue} from '../../../../../models/identityGovernance/createWorkflowFromDiscriminatorValue';
import {serializeWorkflow} from '../../../../../models/identityGovernance/serializeWorkflow';
import type {Workflow} from '../../../../../models/identityGovernance/workflow';
import type {CreateNewVersionPostRequestBody} from './createNewVersionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateNewVersionPostRequestBody(createNewVersionPostRequestBody: CreateNewVersionPostRequestBody | undefined = {} as CreateNewVersionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "workflow": n => { createNewVersionPostRequestBody.workflow = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
