import {EducationFeedback} from './educationFeedback';
import {EducationItemBody} from './educationItemBody';
import {IdentitySet} from './identitySet';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedback(writer: SerializationWriter, educationFeedback: EducationFeedback | undefined = {} as EducationFeedback) : void {
        writer.writeObjectValue<IdentitySet>("feedbackBy", educationFeedback.feedbackBy, serializeIdentitySet);
        writer.writeDateValue("feedbackDateTime", educationFeedback.feedbackDateTime);
        writer.writeStringValue("@odata.type", educationFeedback.odataType);
        writer.writeObjectValue<EducationItemBody>("text", educationFeedback.text, serializeEducationItemBody);
        writer.writeAdditionalData(educationFeedback.additionalData);
}
