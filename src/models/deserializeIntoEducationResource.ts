import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationResource} from './educationResource';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationResource(educationResource: EducationResource | undefined = {} as EducationResource) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { educationResource.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { educationResource.createdDateTime = n.getDateValue(); },
        "displayName": n => { educationResource.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { educationResource.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { educationResource.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { educationResource.odataType = n.getStringValue(); },
    }
}
