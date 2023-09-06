import { type EducationFeedback } from './educationFeedback';
import { type EducationItemBody } from './educationItemBody';
import { type IdentitySet } from './identitySet';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationFeedback(writer: SerializationWriter, educationFeedback: EducationFeedback | undefined = {} as EducationFeedback) : void {
        writer.writeObjectValue<IdentitySet>("feedbackBy", educationFeedback.feedbackBy, serializeIdentitySet);
        writer.writeDateValue("feedbackDateTime", educationFeedback.feedbackDateTime);
        writer.writeStringValue("@odata.type", educationFeedback.odataType);
        writer.writeObjectValue<EducationItemBody>("text", educationFeedback.text, serializeEducationItemBody);
        writer.writeAdditionalData(educationFeedback.additionalData);
}
