import {createCustomExtensionDataFromDiscriminatorValue} from '../../../../../models/createCustomExtensionDataFromDiscriminatorValue';
import {CustomExtensionData} from '../../../../../models/customExtensionData';
import {serializeCustomExtensionData} from '../../../../../models/serializeCustomExtensionData';
import {ResumePostRequestBody} from './resumePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResumePostRequestBody(resumePostRequestBody: ResumePostRequestBody | undefined = {} as ResumePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { resumePostRequestBody.data = n.getObjectValue<CustomExtensionData>(createCustomExtensionDataFromDiscriminatorValue); },
        "source": n => { resumePostRequestBody.source = n.getStringValue(); },
        "type": n => { resumePostRequestBody.type = n.getStringValue(); },
    }
}
