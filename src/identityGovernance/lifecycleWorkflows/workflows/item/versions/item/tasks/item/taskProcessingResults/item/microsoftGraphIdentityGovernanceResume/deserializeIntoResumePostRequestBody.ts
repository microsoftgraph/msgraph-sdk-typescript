import {createCustomTaskExtensionCallbackDataFromDiscriminatorValue} from '../../../../../../../../../../../models/identityGovernance/createCustomTaskExtensionCallbackDataFromDiscriminatorValue';
import {CustomTaskExtensionCallbackData} from '../../../../../../../../../../../models/identityGovernance/customTaskExtensionCallbackData';
import {serializeCustomTaskExtensionCallbackData} from '../../../../../../../../../../../models/identityGovernance/serializeCustomTaskExtensionCallbackData';
import {ResumePostRequestBody} from './resumePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResumePostRequestBody(resumePostRequestBody: ResumePostRequestBody | undefined = {} as ResumePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { resumePostRequestBody.data = n.getObjectValue<CustomTaskExtensionCallbackData>(createCustomTaskExtensionCallbackDataFromDiscriminatorValue); },
        "source": n => { resumePostRequestBody.source = n.getStringValue(); },
        "type": n => { resumePostRequestBody.type = n.getStringValue(); },
    }
}
