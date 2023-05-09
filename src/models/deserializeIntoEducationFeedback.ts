import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationFeedback} from './educationFeedback';
import {EducationItemBody} from './educationItemBody';
import {IdentitySet} from './identitySet';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedback(educationFeedback: EducationFeedback | undefined = {} as EducationFeedback) : Record<string, (node: ParseNode) => void> {
    return {
        "feedbackBy": n => { educationFeedback.feedbackBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "feedbackDateTime": n => { educationFeedback.feedbackDateTime = n.getDateValue(); },
        "@odata.type": n => { educationFeedback.odataType = n.getStringValue(); },
        "text": n => { educationFeedback.text = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
    }
}
